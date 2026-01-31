import React, { useState } from "react";
import axios from "axios";

const TasaForm = () => {
  const [tasaNueva, setTasaNueva] = useState("");
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "/api/tasa/actualizar-tasa", 
        { tasaNueva },
        { headers: { "Authorization": "Bearer " + localStorage.getItem("adminToken") } }
      );
      setMensaje(response.data.msg);
      setTasaNueva(""); // Limpiar campo
    } catch (err) {
      setError("Hubo un error al actualizar la tasa.");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Actualizar Tasa de Cambio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tasaNueva">Nueva Tasa de Cambio:</label>
          <input
            type="number"
            id="tasaNueva"
            value={tasaNueva}
            onChange={(e) => setTasaNueva(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar Tasa</button>
      </form>

      {error && <div style={{ color: "red" }}>{error}</div>}
      {mensaje && <div style={{ color: "green" }}>{mensaje}</div>}
    </div>
  );
};

export default TasaForm;
