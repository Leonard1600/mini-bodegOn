import mongoose from "mongoose";

const exchangeRateSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      enum: ["BCV", "MANUAL"],
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ExchangeRate", exchangeRateSchema);
