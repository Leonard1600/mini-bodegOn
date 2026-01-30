function Footer({ data }) {
  // Estado: aún no hay datos
  if (!data) {
    return (
      <footer className="mt-10 border-t bg-gray-50 px-6 py-4 text-sm text-gray-400">
        <p>Cargando información de tasa BCV…</p>
      </footer>
    );
  }

  const { appliedRate, bcvRate } = data;

  // Estado: datos incompletos
  if (!appliedRate || !bcvRate) {
    return (
      <footer className="mt-10 border-t bg-gray-50 px-6 py-4 text-sm text-gray-400">
        <p>Información de tasa no disponible</p>
      </footer>
    );
  }

  // 📌 Fecha segura: createdAt → date → null
  const rawDate = appliedRate.createdAt || appliedRate.date || null;

  const displayDate = rawDate
    ? new Date(rawDate).toLocaleDateString("es-VE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  return (
    <footer className="mt-10 border-t bg-gray-50 px-6 py-4 text-sm text-gray-700">
      <div className="max-w-4xl space-y-1">
        <p>
          <span className="font-medium text-gray-900">
            Tasa usada para precios:
          </span>{" "}
          {appliedRate.rate} Bs/USD
        </p>

        <p>
          <span className="font-medium text-gray-900">
            Tasa BCV (referencia):
          </span>{" "}
          {bcvRate.rate} Bs/USD
        </p>

        <p className="pt-1 text-xs text-gray-500">
          Fecha: {displayDate}
        </p>
      </div>
    </footer>
  );
}

export default Footer;






