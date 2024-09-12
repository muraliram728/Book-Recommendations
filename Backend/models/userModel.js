const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        maxlength : [6,'password cannot exist 6 characters']
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
    this.password = await bcrypt.hash(this.password,10) //bcrypt package
})

userScheema.methods.getJwtToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}

let model = mongoose.model('User', userScheema);

module.exports = model;