const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserProfile, changePassword } = require('../controllers/authController');
const router = express.Router();
const {isAuthendicatedUser} = require('../middlewares/authendicate');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthendicatedUser,getUserProfile);
router.route('/password/change').put(isAuthendicatedUser,changePassword);
module.exports = router;