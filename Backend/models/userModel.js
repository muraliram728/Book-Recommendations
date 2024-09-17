const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userScheema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'please enter name']
    },
    email : {
        type : String,
        required : [true,'please enter email'],
        unique : true,
        validate : [validator.isEmail, 'please enter valid email address']  //validator package
    },
    password : {
        type : String,
        required : [true,'please enter password'],
        maxlength : [6,'password cannot exist 6 characters'],
        select : false
    },
    avatar : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : 'user'
    },

    resetPasswordTokken : String,
    resetPasswordTokkenExpire : Date,

    CreatedAt : {
        type : Date,
        default : Date.now
    }
})

userScheema.pre('save',async function (next){
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password,10) //bcrypt package
})

userScheema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

userScheema.methods.isValidPassword = async function(enteredpassword){
    console.log('on save',this.password)
    return bcrypt.compare(enteredpassword, this.password)
}

userScheema.methods.getResetToken = function(){
   //Generate token - using crypto package
   const token = crypto.randomBytes(20).toString('hex');

   //Genarate Hash and set reset resetPasswordTokken , sha256 is a algorithm
   this.resetPasswordTokken = crypto.createHash('sha256').update(token).digest('hex');

   //set token expire time
   this.resetPasswordTokkenExpire = Date.now()+30*60*1000;
   
   return token;
}


let model = mongoose.model('User', userScheema);

module.exports = model;