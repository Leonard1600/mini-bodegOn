// backend/src/models/Category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    order: {
      type: Number,
      required: true,
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

export default mongoose.model("Category", categorySchema);
