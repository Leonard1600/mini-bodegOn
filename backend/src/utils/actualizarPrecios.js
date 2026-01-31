// src/utils/actualizarPrecios.js
import Product from '../models/Product.js'; // El modelo Producto
import Tasa from '../models/Tasa.js'; // El modelo Tasa

export const actualizarPrecios = async () => {
  try {
    // Obtener la tasa de cambio actual
    const tasa = await Tasa.findOne().sort({ fecha: -1 }).limit(1);
    if (!tasa) {
      throw new Error('No se encontró la tasa de cambio');
    }

    // Obtener todos los productos
    const productos = await Product.find();

    // Actualizar los precios de los productos con la tasa actual
    for (const producto of productos) {
      const precioNuevo = Math.ceil(producto.precioDolar * tasa.tasa); // Redondeamos hacia arriba
      producto.precioBolivar = precioNuevo;
      await producto.save();
    }

    console.log('Precios actualizados correctamente');
  } catch (error) {
    console.error('Error al actualizar precios:', error);
  }
};

