const catchAsyncError = require('../middlewares/catchAsyncError');
const User = require('../models/userModel');
const sendEmail = require('../utils/email');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/jwt');
const crypto = require('crypto');


//register user - /api/v1/register
exports.registerUser = catchAsyncError(async (req,res,next) => {
    const {name,email,password,avatar} = req.body
    const user = await User.create({
        name,
        email,
        password,
        avatar
    });

    sendToken(user,201,res)
})

//login user - /api/v1/login
exports.loginUser = catchAsyncError(async (req,res,next) => {
    const {email,password} = req.body

    if(!email || !password){
        return next(new ErrorHandler('please enter email & password',400))
    }

    //Finding the user from database
    const user = await User.findOne({email}).select('+password');

    if(!user) {
        return next(new ErrorHandler('invalid email or password',401))
    }

    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler('invalid email or password',401))
    }

    sendToken(user,201,res)
})


//logout user - /api/v1/logout
exports.logoutUser = catchAsyncError(async (req,res,next) => {
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    .status(200)
    .json({
        success:true,
        message:"Loggedout"
    })
})

//forgot Password - /api/v1/password/forgot
exports.forgotPassword = catchAsyncError(async (req,res,next) => {
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler('user not found with this error', 404))
    }

    const resetTokken = user.getResetToken();
    await user.save({validateBeforeSave: false})

    //create reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetTokken}`;

    const message = `Your password reset url is as follows \n\n
    ${resetUrl} \n\n if you have not requested this email, then ignore it.`

    try {
        //utilty function
        sendEmail({
            email : user.email,
            subject : "Bookdom Password Recovery",
            message
        })
        res.status(200).json({
            success : true,
            message : `email send to ${user.email}`
        })

    } catch (error) {
        user.resetPasswordTokken = undefined;
        user.resetPasswordTokkenExpire = undefined;
        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(error.message),500)
    }
})


//resetPassword - api/v1/password/reset/:token
exports.resetPassword = catchAsyncError (async (req,res,next) => {
    const resetPasswordTokken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordTokken,
        resetPasswordTokkenExpire:{
            $gt : Date.now()
        }
    })

    if(!user){
        return next(new ErrorHandler('Password reset token is invalid or expired'));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler('Password does not match'));
    }

    user.password = req.body.password;
    user.resetPasswordTokken = undefined;
    user.resetPasswordTokkenExpire = undefined;
    await user.save({validateBeforeSave:false})

    sendToken(user,201,res)
})

//get user profile - /api/v1/myprofile
exports.getUserProfile = catchAsyncError (async (req,res,next) => {
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success : true,
        user
    })
})

//change password
exports.changePassword = catchAsyncError (async (req,res,next) => {
    const user = await User.findById(req.user.id).select('+password');
    console.log('user details',user);
    //check old password
    if (!await user.isValidPassword(req.body.oldPassword)) {
        return next(new ErrorHandler('old password is incorrect',401));
    }

    //assigning new password
    user.password = req.body.password;
    await user.save();
    res.status(200).json({
        success : true,
    })
})

//update Profile
exports.updateProfile = catchAsyncError (async (req,res,next) => {
    const newUserData = {
        name : req.body.name,
        email : req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        user
    })
})

//Admin : Get All users - /api/v1/admin/users
exports.getAllusers = catchAsyncError (async (req,res,next) => {
    const users = await User.find();
    res.status(200).json({
        success : true,
        users
    })
})

//Admin: get specific user - /api/v1/admin/users/:id (66e8e754503cc4ac73fe667e)
exports.getUser = catchAsyncError (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler(`user not found with this id ${req.params.id}`,401));
    }
    res.status(200).json({
        success : true,
        user
    })
})

//Admin: Update User - /api/v1/admin/users/:id (66e8e754503cc4ac73fe667e)
exports.updateUser = catchAsyncError (async (req,res,next) => {
    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new: true,
        runValidators : true
    })
    res.status(200).json({
        success : true,
        user
    })
})

//Admin: Delete user - /api/v1/admin/users/:id (66e8e754503cc4ac73fe667e)
exports.deletUser = catchAsyncError (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if(!user){
        return next(new ErrorHandler(`user not found with this id ${req.params.id}`,401));
    }
    await user.deleteOne();
    res.status(200).json({
        success : true,
    })
})