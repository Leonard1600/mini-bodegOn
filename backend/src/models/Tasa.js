// src/models/Tasa.js
import mongoose from 'mongoose';

const tasaSchema = new mongoose.Schema({
  tasa: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Tasa = mongoose.model('Tasa', tasaSchema);

export default Tasa;
