import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { getActiveExchangeRate } from "./services/exchangeRate.service";

function App() {
  const [rateData, setRateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const data = await getActiveExchangeRate();
        setRateData(data);
      } catch (error) {
        console.error("Error al obtener tasas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return <p className="p-6">Cargando tasas...</p>;
  }

  return (
    <div className="p-6 min-h-screen flex flex-col">
      <main className="flex-grow">
        <h1 className="text-2xl font-bold">Mini bodegOn</h1>
        <p className="mt-2 text-gray-600">
          Catálogo con precios actualizados automáticamente
        </p>
      </main>

      <Footer data={rateData} />
    </div>
  );
}

export default App;


