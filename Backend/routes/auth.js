const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserProfile, changePassword, updateProfile, getAllusers, getUser, updateUser, deletUser } = require('../controllers/authController');
const router = express.Router();
// const {isAuthendicatedUser} = require('../middlewares/authendicate');
const {isAuthendicatedUser,isAuthorizeRoles} = require('../middlewares/authendicate');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthendicatedUser,getUserProfile);
router.route('/password/change').put(isAuthendicatedUser,changePassword);
router.route('/update').put(isAuthendicatedUser,updateProfile);


//Admin routes
router.route('/admin/users').get(isAuthendicatedUser,isAuthorizeRoles('admin'),getAllusers);
router.route('/admin/users/:id').get(isAuthendicatedUser,isAuthorizeRoles('admin'),getUser)
                                .put(isAuthendicatedUser,isAuthorizeRoles('admin'),updateUser)
                                .delete(isAuthendicatedUser,isAuthorizeRoles('admin'),deletUser);

module.exports = router;