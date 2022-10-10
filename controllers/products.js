const Product = require("../models/products");
const { v4: uuidv4 } = require("uuid");

//fetch all
const fetchAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

//post data
const postData = async (req, res) => {
  try {
    const newProduct = new Product({
      id: uuidv4(),
      title: req.body.title,
      price: Number(req.body.price),
    });

    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

//single product
const singleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    // const singleproduct = products.filter((product) => product.id !== id);
    const product = await Product.findOne({ id });
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ id });
    if (product) {
      await Product.deleteOne({ id });
      res.status(200).send("deleted");
    } else {
      res.status(404).send({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
    
        const product = await Product.findOne({ id });
        if (product) {
          await Product.updateOne ({ id: id },
          {
            $set:{
                title: req.body.title,
                price: req.body.price,
            }
          })
          res.status(200).send({ message: "product updated" });
        } else {
          res.status(404).send({ message: "product not found" });
        }
      } catch (error) {
        res.status(500).send({
          message: error.message,
        });
      }
    };
  

module.exports = {
  fetchAll,
  postData,
  singleProduct,
  deleteProduct,
  updateProduct,
};
