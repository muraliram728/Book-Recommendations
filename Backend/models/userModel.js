const mongoose = require('mongoose');
const validator = require('validator');

const userScheema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'please enter name']
    },
    email : {
        type : String,
        required : [true,'please enter email'],
        unique : true,
        validate : [validator.isEmail, 'please enter valid email address']
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

let model = mongoose.model('User', userScheema);

module.exports = model;