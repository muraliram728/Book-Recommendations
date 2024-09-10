const Product = require('../models/productModel');

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
exports.newProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}

//get single product - /api/v1/product/:id
exports.getSingleProduct = async(req,res,next) => {
    const product = await Product.findById(req.params.id )
    if (!product) {
        res.status(500).json({
            success: false,
            message: "product not fund"
        })
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
            res.status(500).json({
                success: false,
                message: "product not fund"
            })
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
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
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
