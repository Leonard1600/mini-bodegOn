// backend/src/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    priceUSD: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
