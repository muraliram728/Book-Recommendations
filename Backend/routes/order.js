const express = require('express');
const { newOrder } = require('../controllers/orderController');
const router = express.Router();
const {isAuthendicatedUser} = require('../middlewares/authendicate')

router.route('/order/new').post(isAuthendicatedUser,newOrder);

module.exports = router;