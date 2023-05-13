const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crpto = require("crypto");

// Register a User
exports.registerUser = catchAsyncErrors( async (req, res, next)=>{

    const {name, email, password} = req.body;
    const user = await User.create({
        name, email, password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl"
        }
    });

    sendToken(user, 201, res);
});


exports.loginUser = catchAsyncErrors( async (req, res, next) =>{
    const {email, password} = req.body;
    
    // checking if user has given pass and email both
    if(!email || !password){
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or Password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or Password"), 401);
    }

    sendToken(user, 200, res);

});


//Logout User
exports.logout = catchAsyncErrors(async(req, res, next) =>{

    res.cookie("token", null, {
        expires:new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
});


// Forgot Password
exports.forgotPassword = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return next(new ErrorHandler("User mpt found"), 404);
    }

    // Get ResetPassword Token
    const resetToken = user.getResetPasswordToken();
    await user.save({validateBeforeSave:false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then please ignore it`;

    try{

        await sendEmail({
            email:user.email,
            subject:"eKalyanam Password Recovery",
            message,

        });

        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave:false});
        
        return next(new ErrorHandler(error.message, 500));
    }
});


// Reset Password

exports.resetPassword = catchAsyncErrors( async (req, res, next) => {

    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt:Date.now()},
    });
    
    if(!user){
        return next(new ErrorHandler("Reset Password Token is invalid or has been expired"));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match"));
    }

    user.password  = req.body.password;
    resetPasswordToken = undefined;
    resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);

});

// Get User Details
exports.getUserDetails = catchAsyncErrors( async (req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });

});


//Updare User Password
exports.updatePassword = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Old Password is incorrect", 400));
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);

});


// Update User Profile
exports.updateProfile = catchAsyncErrors( async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email:req.body.email,
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });

});


//Get All Users (admin)
exports.getAllUsers = catchAsyncErrors( async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
});

//Get Single User (admin)
exports.getSingleUser = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exist with ID : ${req.params.id}`));
    }

    res.status(200).json({
        success: true,
        user
    });
});


// Delete User
exports.deleteUser = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User does not exist with ID : ${req.params.id}`));
    }

    await User.deleteOne({_id : req.params.id});
    res.status(200).json({
        success: true
    });

});

//Update User Role
exports.updateUserRole = catchAsyncErrors( async (req, res, next) => {



    const user = await User.findById(req.params.id);
});





