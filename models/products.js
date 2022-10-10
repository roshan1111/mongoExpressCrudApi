const mongoose = require("mongoose");
//create schema
const productsSchema = new mongoose.Schema({
    id: String,
    title:{
      type: String,
      required:true
    } ,
    price: {
      type: Number,
      required:true
    },
    createdAt: {
      type: Date,
      default: new Date().toISOString()
    }
  });
  
  //create model (name of collection)
  const Product = mongoose.model("products", productsSchema);
  module.exports = Product;