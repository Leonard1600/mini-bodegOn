import Product from '../models/Product.js'; // Modelo de productos
import Tasa from '../models/Tasa.js'; // Modelo de tasa

const updateProductPrices = async () => {
  try {
    const tasa = await Tasa.findOne().sort({ fecha: -1 }); // Obtener la última tasa registrada

    if (!tasa) {
      console.log("No se encontró tasa en la base de datos.");
      return;
    }

    // Obtener todos los productos y actualizar los precios en bolívares
    const productos = await Product.find(); // Obtener todos los productos

    for (let product of productos) {
      const priceInBs = product.priceUSD * tasa.tasa; // Convertir el precio de USD a Bs.
      product.price = priceInBs; // Actualizar el precio en bolívares
      await product.save(); // Guardar el producto actualizado
    }

    console.log('Precios de productos actualizados correctamente.');
  } catch (error) {
    console.error('Error al actualizar los precios:', error.message);
  }
};

export default updateProductPrices;
