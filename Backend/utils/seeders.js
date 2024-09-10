const connectDatabase = require("../config/database");
const products = require("../data/product.json");
const Product = require("../models/productModel");
const dotenv = require('dotenv');

dotenv.config({path:'Backend/config/config.env'});
connectDatabase();

const seedProduct = async () => {
  try {
    await Product.deleteMany();
    console.log("Delete All product!");
    await Product.insertMany(products);
    console.log("All product added!");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

seedProduct();
