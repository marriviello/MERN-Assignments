const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required:[true,"Title is required"], 
        minlength: [2, "Must be at least 2 characters"],
        maxlength: [10, "Must be at least 10 characters"]
    },
    price: { 
        type: Number,
        required: [true,"Price is required"]
    },
    description: { 
        type: String,
        required: [true, "Description is required"] 
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

