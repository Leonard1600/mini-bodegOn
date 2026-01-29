function Footer({ data }) {
  if (!data || !data.appliedRate || !data.bcvRate) {
    return null;
  }

  const { appliedRate, bcvRate } = data;

  // 📌 Fecha segura: createdAt (MANUAL) → date (BCV) → null
  const rawDate =
    appliedRate.createdAt || appliedRate.date || null;

  const displayDate = rawDate
    ? new Date(rawDate).toLocaleDateString("es-VE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "—";

  return (
    <footer className="mt-10 border-t pt-4 text-sm text-gray-600">
      <p>
        <strong>Tasa usada para precios:</strong>{" "}
        {appliedRate.rate} Bs/USD
      </p>

      <p>
        <strong>Tasa BCV (referencia):</strong>{" "}
        {bcvRate.rate} Bs/USD
      </p>

      <p className="mt-1">
        <strong>Fecha:</strong>{" "}
        {displayDate}
      </p>
    </footer>
  );
}

export default Footer;





