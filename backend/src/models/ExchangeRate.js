// backend/src/models/ExchangeRate.js
import mongoose from "mongoose";

const exchangeRateSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
      default: "BCV",
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ExchangeRate", exchangeRateSchema);
