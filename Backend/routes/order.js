const express = require('express');
const { newOrder, getSingleOrder, getMyOrder, Orders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();
const {isAuthendicatedUser,isAuthorizeRoles} = require('../middlewares/authendicate');
const { updateOne } = require('../models/userModel');

router.route('/order/new').post(isAuthendicatedUser,newOrder);
router.route('/order/:id').get(isAuthendicatedUser,getSingleOrder);
router.route('/myorders').get(isAuthendicatedUser,getMyOrder);

//Admin routes
router.route('/orders').get(isAuthendicatedUser,isAuthorizeRoles('admin'),Orders);
router.route('/orders/:id').put(isAuthendicatedUser,isAuthorizeRoles('admin'),updateOrder)
                           .delete(isAuthendicatedUser,isAuthorizeRoles('admin'),deleteOrder);


module.exports = router;