import mongoose from "mongoose";

const exchangeRateSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      enum: ["BCV", "MANUAL"],
      required: true,
      default: "BCV",
    },

    rate: {
      type: Number,
      required: true,
      min: 0,
    },

    // Fecha oficial de la tasa (BCV) o fecha manual
    date: {
      type: Date,
      default: Date.now,
    },

    // Solo una tasa activa por tipo
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices útiles
exchangeRateSchema.index({ source: 1, active: 1 });
exchangeRateSchema.index({ date: -1 });

export default mongoose.model("ExchangeRate", exchangeRateSchema);
