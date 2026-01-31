import axios from 'axios';

const API_KEY = 'bee9870de357cbe63b47a06a'; // Tu clave API
const BASE_URL = 'https://v6.exchangerate-api.com/v6'; // La URL base de la API

export const obtenerTasaBCV = async () => {
  try {
    // Llamada a la API para obtener la tasa de cambio
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/USD`);
    
    // Extraer la tasa del dólar con respecto al bolívar
    const tasaDolar = response.data.conversion_rates.BSF; // Ajusta la clave de acuerdo con la respuesta de la API

    if (!tasaDolar) {
      throw new Error('No se pudo obtener la tasa de cambio');
    }

    return tasaDolar; // Retorna la tasa
  } catch (error) {
    console.error('Error al obtener la tasa BCV:', error.message);
    throw new Error('No se pudo obtener la tasa del BCV');
  }
};

