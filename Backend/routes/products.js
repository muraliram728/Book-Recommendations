
const express = require('express');
const { getProducts, newProduct, getSingleProduct, UpdateProduct, DeleteProduct } = require('../controllers/productController');
const router = express.Router();
const {isAuthendicatedUser,isAuthorizeRoles} = require('../middlewares/authendicate');
const { createReview, getReviews, deleteReviews } = require('../controllers/orderController');

router.route('/products').get(isAuthendicatedUser, getProducts);
// router.route('/product/new').post(isAuthendicatedUser,isAuthorizeRoles('admin'), newProduct);
router.route('/product/:id').get(getSingleProduct);
router.route('/product/:id').put(UpdateProduct);
router.route('/product/:id').delete(DeleteProduct);


router.route('/review').put(isAuthendicatedUser,createReview)
                       .delete(deleteReviews);
router.route('/reviews').get(getReviews);



//admin routes
router.route('admin/product/new').post(isAuthendicatedUser,isAuthorizeRoles('admin'), newProduct);

module.exports = router;