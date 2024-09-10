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

//get single product - /product/:id
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