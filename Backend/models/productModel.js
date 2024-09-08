const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter product name "],
    trim: true,
    maxLength: [100, "product name exceed 100 character"],
  },

  price: {
    type: Number,
    default: 0.0,
  },

  description: {
    type: String,
    required: [true, "please enter product description"],
  },

  ratings: {
    type: String,
    default: 0,
  },

  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "please enter category"],
    enum: {
      values: ["fictional", "nonFictional", "food", "magic", "sports"],
      message: "please select correct category",
    },
  },

  seller: {
    type: String,
    required: [true, "please enter product seller"],
  },

  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [20, "product stock cannot exceed 20"],
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

let Schema = mongoose.model("product", productSchema);

module.exports = Schema;
