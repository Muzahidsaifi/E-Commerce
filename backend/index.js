const express = require('express');
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb+srv://saifisho:Pm%40123%23@cluster0.jjbvyoj.mongodb.net/saifisho", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Upload directory setup
const uploadDir = path.join(__dirname, 'upload', 'images');
fs.mkdirSync(uploadDir, { recursive: true });
app.use('/images', express.static(uploadDir));

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Express App is Running...");
});

// Multer Storage Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// ✅ Upload Route (POST /upload)
app.post("/upload", upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: 0,
      message: "No file uploaded"
    });
  }
  const imageUrl = `http://localhost:${port}/images/${req.file.filename}`;
  console.log("✅ Image uploaded:", imageUrl);
  res.json({
    success: 1,
    image_url: imageUrl
  });
});

// Product Schema & Model
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

// Add Product Route
app.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({}).sort({ id: 1 });
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      available: req.body.available !== undefined ? req.body.available : true,
    });

    await newProduct.save();
    res.json({ success: true, product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get All Products
app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Update Product
app.put('/updateproduct/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedProduct = await Product.findOneAndUpdate(
      { id: id },
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product: updatedProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete Product
app.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deletedProduct = await Product.findOneAndDelete({ id: id });
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
