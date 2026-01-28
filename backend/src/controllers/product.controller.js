import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ active: true }).populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: "Error creating product" });
  }
};
