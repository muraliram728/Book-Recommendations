const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address:{
            type : String,
            required : true
        },
        country:{
            type : String,
            required : true
        },
        city:{
            type : String,
            required : true
        },
        phoneNo:{
            type : String,
            required : true
        },
        postalCode:{
            type : String,
            required : true
        },
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },

    orderItems:[{
        name:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'product'
        }
    }],

    itemsPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    paidAt:{
        type:Date,
    },
    deleverdAt:{
        type:Date,
    },
    orderStatus:{
        type : String,
        required : true,
        default : 'Prossing'
    },
    orderStatus:{
        type : Date,
        default : Date.now
    },
})

let orderModel = mongoose.model('Order',orderSchema);

module.exports = orderModel;