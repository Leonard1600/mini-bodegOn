import mongoose from 'mongoose';

const tasaSchema = new mongoose.Schema(
  {
    tasa: {
      type: Number,
      required: true,
      unique: true, // Para asegurarnos de que haya solo una tasa
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Para mantener un registro de cuándo se actualizó la tasa
);

const Tasa = mongoose.model('Tasa', tasaSchema);

export default Tasa;
