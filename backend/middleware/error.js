const ErrorHandler = require("../utils/errorhandler");


module.exports = (err, req,res , next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong Mongodb Id error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Mongoose duplicate key Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong JWT Error
    if(err.name === "JsonWebTokenError"){
        const message = `JSON web Token is invalid, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    if(err.name === "TokenExpiredError"){
        const message = `JSON web Token is Expired, Try Again`;
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};