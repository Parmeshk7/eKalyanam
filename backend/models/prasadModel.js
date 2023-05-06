const mongoose = require("mongoose");

const prasadSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    
    contents:[{
        type: String,
        }
    ],

    images:[
        {
            public_id:{
                type:String,
                required:true 
            },
            url:{
                type:String,
                required:true
            }
        }   
    ],

    god:{
        type:String,
        required:[true, "Please Enter God Category"],
    },

    location:{
        type: String,
        required:[true, "Please Enter Location"],
    },

    stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"],
        maxLength:[4, "stock cannot exceed 4 characters"],
        default:1
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false
    },

    
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Prasad", prasadSchema);
