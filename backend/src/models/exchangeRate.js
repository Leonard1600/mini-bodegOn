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
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ExchangeRate", exchangeRateSchema);
