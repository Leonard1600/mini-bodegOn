import cron from 'node-cron';
import { obtenerTasaBCV } from './utils/tasaService';
import Tasa from './models/Tasa'; // Tu modelo de Tasa

// Cron job para actualizar la tasa todos los días a las 6 AM
cron.schedule('0 6 * * *', async () => {
  console.log('Actualizando la tasa del BCV...');
  try {
    const tasaDolar = await obtenerTasaBCV();

    // Verificar si la tasa del BCV ya está en la base de datos y si ha cambiado
    const tasaExistente = await Tasa.findOne().sort({ fecha: -1 }); // Obtenemos la última tasa guardada

    // Si la tasa es diferente de la última registrada, la actualizamos
    if (!tasaExistente || tasaExistente.tasa !== tasaDolar) {
      // Guardamos la nueva tasa
      const nuevaTasa = new Tasa({
        tasa: tasaDolar,
        fecha: new Date(),
      });

      await nuevaTasa.save(); // Guardamos la nueva tasa

      console.log('Tasa actualizada correctamente');
    } else {
      console.log('La tasa del BCV no ha cambiado, no se actualiza.');
    }
  } catch (error) {
    console.error('Error al ejecutar el cron job para actualizar la tasa:', error.message);
  }
});

