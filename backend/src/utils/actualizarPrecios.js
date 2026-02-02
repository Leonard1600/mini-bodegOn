// backend/src/utils/actualizarPrecios.js
import Product from '../models/Product.js';
import Tasa from '../models/Tasa.js';

// Redondea SIEMPRE hacia arriba al siguiente múltiplo de 50
const redondearHaciaArriba50 = (precio) => {
  return Math.ceil(precio / 50) * 50;
};

export const actualizarPrecios = async () => {
  try {
    // Obtener la tasa de cambio actual (tasa usada, no BCV)
    const tasa = await Tasa.findOne().sort({ fecha: -1 }).limit(1);
    if (!tasa) {
      throw new Error('No se encontró la tasa de cambio');
    }

    // Obtener todos los productos
    const productos = await Product.find();

    // Actualizar precios
    for (const producto of productos) {
      const precioCalculado = producto.precioDolar * tasa.tasa;
      const precioRedondeado = redondearHaciaArriba50(precioCalculado);

      producto.precioBolivar = precioRedondeado;
      await producto.save();
    }

    console.log('Precios actualizados correctamente (redondeo a 50 aplicado)');
  } catch (error) {
    console.error('Error al actualizar precios:', error);
  }
};

