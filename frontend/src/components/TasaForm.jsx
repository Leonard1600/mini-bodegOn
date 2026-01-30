import React, { useState } from 'react';
import axios from 'axios';

const TasaForm = () => {
  const [tasa, setTasa] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setTasa(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:4000/api/tasa', // Asegúrate de que la URL sea correcta
        { tasa: parseFloat(tasa) },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`, // Aquí guardamos el token JWT
          },
        }
      );
      setSuccess('Tasa actualizada correctamente');
      setError('');
    } catch (err) {
      setError('Error al actualizar la tasa. Asegúrate de que tienes permisos.');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Modificar Tasa de Cambio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tasa">Nueva Tasa de Cambio (Bs/USD):</label>
          <input
            type="number"
            id="tasa"
            value={tasa}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Actualizar Tasa</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default TasaForm;
