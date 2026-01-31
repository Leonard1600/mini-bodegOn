// backend/src/models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precioDolar: {
    type: Number,
    required: true,
  },
  precioBolivar: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
