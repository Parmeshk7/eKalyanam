const Prasad = require("../models/prasadModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures.");


//Create Prasad
exports.createPrasad = catchAsyncErrors( async (req, res, next) => {
    const prasad = await Prasad.create(req.body);

    res.status(201).json({
        success: true,
        prasad
    });

});

//Get All Prasad
exports.getAllPrasads = catchAsyncErrors( async (req, res, next) =>{
    const resultPerPage = 8;
    const prasadCount = await Prasad.countDocuments();
    const apiFeature = new ApiFeatures(Prasad.find(), req.query).search().filter().pagination(resultPerPage);
    const prasads = await apiFeature.query;
    res.status(200).json({
        success:true,
        prasads,
        prasadCount,
        resultPerPage
    });
})

//Get Single Prasad Details
exports.getPrasadDetails = catchAsyncErrors( async (req, res, next) =>{
    const prasad = await Prasad.findById(req.params.id);

    if(!prasad){
        return next(new ErrorHandler("Prasad not found", 404));
        
    }

    res.status(200).json({
        success:true,
        prasad
    })
}) 

// Update Prasad
exports.updatePrasad = catchAsyncErrors( async (req, res, next) =>{
    let prasad = await Prasad.findById(req.params.id);
    if(!prasad){
        return next(new ErrorHandler("Prasad not found", 404));
    }
    prasad = await Prasad.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, useFindAndModify:false});
    res.status(200).json({
        success:true,
        prasad
    });
})

//Delete Prasad
exports.deletePrasad = catchAsyncErrors( async (req, res, next) =>{
    const prasad = await Prasad.findById(req.params.id);

    if(!prasad){
        return next(new ErrorHandler("Prasad not found", 404));
    }

    await prasad.deleteOne();

    res.status(200).json({
        success:true,
        message:"Prasad Deleted Successfully"
    });
})


