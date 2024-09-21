const catchAsyncError = require('../middlewares/catchAsyncError')
const Order = require('../models/orderModel');
const ErrorHandler = require('../utils/errorHandler');
const product = require('../models/productModel');


//Create New Order - api/v1/order/new
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user.id
    })

    res.status(200).json({
        success: true,
        order
    })
})

//get single order - api/v1/order/:id
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if (!order) {
        return next(new ErrorHandler(`order not found with this id ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        order
    })
})

//get logedin user orders - api/v1/myoreder
exports.getMyOrder = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id });
    if (!orders) {
        return next(new ErrorHandler(`order not found with this id ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        orders
    })
})

//admin - get all orders - api/v1/orders
exports.Orders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice
    })

    res.status(200).json({
        success: true,
        totalAmount,
        orders
    })
})

//Admin: Update Order / Order Status - api/v1/order/:id
exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (order.orderStatus == 'Delivered') {
        return next(new ErrorHandler('Order has been already deliver', 400))
    }

    //update the product stock of each order item
    order.orderItems.forEach(async orderItem => {
        await updateStock(orderItem.product, orderItem.quantity)
    })
    order.orderStatus = req.body.orderStatus;
    order.deliveredAt = Date.now();
    await order.save();

    res.status(200).json({
        success: true,
    })
});

async function updateStock(productId, quantity) {
    const product = await product.findById(productId);
    product.stock = product.stock - quantity;
    product.save({ validateBeforeSave: false })
}

//Admin: Delete Order - api/v1/order/:id
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
    const orders = await Order.findById(req.params.id);

    if (!orders) {
        return next(new ErrorHandler(`order not found with this id ${req.params.id}`, 404))
    }

    await orders.deleteOne();

    res.status(200).json({
        success: true,
    })
})

//Create review - api/v1/review
exports.createReview = catchAsyncError(async (req, res, next) => {
    const { productId, rating, comment } = req.body;

    const review = {
        user: req.user.id,
        rating,
        comment
    };

    const productDoc = await product.findById(productId);

    // find if the user has already reviewed the product
    const isReviewed = productDoc.reviews.find((review) => {
        return review.user && review.user.toString() === req.user.id.toString();
    });

    if (isReviewed) {
        // update the review if it already exists
        productDoc.reviews.forEach((review) => {
            if (review.user && review.user.toString() === req.user.id.toString()) {
                review.comment = comment;
                review.rating = rating;
            }
        });
    } else {
        // create a new review
        productDoc.reviews.push(review);
        productDoc.numOfReviews = productDoc.reviews.length;
    }

    // calculate the average rating
    productDoc.ratings = productDoc.reviews.reduce((acc, review) => {
        return review.rating + acc;
    }, 0) / productDoc.reviews.length;

    productDoc.ratings = isNaN(productDoc.ratings) ? 0 : productDoc.ratings;

    await productDoc.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});


// Get Reviews - api/v1/reviews?id={productId}
exports.getReviews = catchAsyncError(async (req, res, next) => {
    const productDoc = await product.findById(req.query.id);

    // If product is not found
    if (!productDoc) {
        return next(new ErrorHandler('Product not found', 404));
    }

    // Respond with the reviews for the product
    res.status(200).json({
        success: true,
        reviews: productDoc.reviews,
    });
});

// Delete Review - api/v1/review
exports.deleteReviews = catchAsyncError(async (req, res, next) => {
    // Find the product by its ID
    const productDoc = await product.findById(req.query.productId);

    if (!productDoc) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    // Filter out the review that doesn't match the review id
    const reviews = productDoc.reviews.filter(review => {
        return review._id.toString() !== req.query.id.toString();
    });

    // Update the number of reviews
    const numOfReviews = reviews.length;

    // Calculate the average rating from the filtered reviews
    let ratings = reviews.reduce((acc, review) => {
        return review.rating + acc;
    }, 0) / reviews.length;
    
    ratings = isNaN(ratings) ? 0 : ratings;

    // Update the product document with the new reviews, number of reviews, and rating
    await product.findByIdAndUpdate(req.query.productId, {
        reviews,
        numOfReviews,
        ratings
    }, {
        new: true, // to return the updated document
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: 'Review deleted successfully'
    });
});