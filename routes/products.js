const router = require("express").Router();
const {fetchAll, postData, singleProduct, deleteProduct, updateProduct} = require("../controllers/products")

//fetch all

//fetch all data
router.get("/", fetchAll );

//create the data
router.post("/", postData);



//fetch by id
router.get("/:id", singleProduct)

//delete product
router.delete("/:id", deleteProduct)

//update products
router.put("/:id", updateProduct)


module.exports = router;
