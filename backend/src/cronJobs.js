import cron from 'node-cron';
import updateProductPrices from './utils/updatePrices.js'; // Importar la función para actualizar precios

// Cron job para actualizar los precios de los productos todos los días a medianoche
cron.schedule('0 0 * * *', async () => {
  console.log('Actualizando precios de productos...');
  await updateProductPrices();
});
