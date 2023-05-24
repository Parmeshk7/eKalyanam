const Prasad = require("../models/prasadModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures.");
const cloudinary = require("cloudinary");


//Create Prasad
// exports.createPrasad = catchAsyncErrors( async (req, res, next) => {
//     const prasad = await Prasad.create(req.body);

//     res.status(201).json({
//         success: true,
//         prasad
//     });

// });

// Create Prasad
exports.createPrasad = catchAsyncErrors(async (req, res, next) =>{

    let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "prasads",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Prasad.create(req.body);

  res.status(201).json({
    success: true,
    product,
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



// Get All Product (Admin)
exports.getAdminPrasads = catchAsyncErrors(async (req, res, next) => {
    const products = await Prasad.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });



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

// Update Prasad - Admin
exports.updatePrasad = catchAsyncErrors( async (req, res, next) =>{
    let product = await Prasad.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Prasad not found", 404));
    }
  
    // Images Start Here
    let images = [];
  
    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
  
    if (images !== undefined) {
      // Deleting Images From Cloudinary
      for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id);
      }
  
      const imagesLinks = [];
  
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "prasads",
        });
  
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
  
      req.body.images = imagesLinks;
    }
  
    product = await Prasad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(200).json({
      success: true,
      product,
    });
  });
      


//Delete Prasad
exports.deletePrasad = catchAsyncErrors( async (req, res, next) =>{
    const prasad = await Prasad.findById(req.params.id);
    
      if (!prasad) {
        return next(new ErrorHandler("Prasad not found", 404));
      }
    
      // Deleting Images From Cloudinary
      for (let i = 0; i < prasad.images.length; i++) {
        await cloudinary.v2.uploader.destroy(prasad.images[i].public_id);
      }
    
      await Prasad.findByIdAndRemove(req.params.id);
    
      res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
      });
    });


