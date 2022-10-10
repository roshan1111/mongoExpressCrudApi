//connecting to database
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/productDB");
      console.log("connected");
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  module.exports = connectDB;