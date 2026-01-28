import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({ active: true }).sort({ order: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ message: "Error creating category" });
  }
};
