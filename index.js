const express = require("express");
const connectDB = require("./config/db")
const productRouter = require("./routes/products");

const app = express();
const port = 3000;

app.listen(port, async () => {
  console.log(`the serever is running at http://localhost:${port} `);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("<h1>welcome to home</h1> ");
});

//these aree middleware receiving json data
app.use(express.json());
//receiving form data body it must be there

app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);
