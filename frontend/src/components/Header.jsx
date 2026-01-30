import React from "react";

function Header() {
  return (
    <header className="bg-amber-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">Mini bodegOn</h1>
          <p className="text-sm">
            Catálogo con precios actualizados automáticamente
          </p>
        </div>

        {/* Información de tasas */}
        <div className="text-sm text-center sm:text-right bg-amber-600/40 rounded-lg px-3 py-2">
          <p>
            <span className="font-semibold">Tasa usada:</span>{" "}
            38.5 Bs/USD
          </p>
          <p>
            <span className="font-semibold">Tasa BCV:</span>{" "}
            38.5 Bs/USD
          </p>
          <p className="text-xs opacity-90">
            Fecha: 27/01/2026
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
