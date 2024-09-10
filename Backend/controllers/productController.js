const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const CatchAsyncError = require('../middlewares/catchAsyncError')

//get Product - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        count : products.length,
        products
    })
}

//Create Product - /api/v1/products/new
exports.newProduct = CatchAsyncError(async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
});

//get single product - /api/v1/product/:id
exports.getSingleProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id )
    if (!product) {
        return next(new ErrorHandler('product not found test',400));
    }
    res.status(201).json({
        success : true,
        product
    })
}

//Update Product - /api/v1/product/
exports.UpdateProduct = async(req,res,next) =>{
        let product = await Product.findById(req.params.id);
        if (!product) {
            return next(new ErrorHandler('product not found test',400));
        }
        product = await Product.findByIdAndUpdate(req.params.id , req.body , {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            success: true,
            product
        })
}

// Delete product - /api/v1/product/
exports.DeleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return next(new ErrorHandler('product not found test',400));
        }

        res.status(200).json({
            success: true,
            message: "Product deleted!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
