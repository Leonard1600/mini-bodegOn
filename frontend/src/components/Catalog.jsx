import React from "react";

function Catalog({ category, appliedRate, addToCart, onBack }) {
  // ====== REDONDEO ======
  const roundTo50 = (value) => {
    if (!value || isNaN(value)) return 0;
    return Math.ceil(value / 50) * 50;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow">

      {/* BOTÓN VOLVER */}
      <button
        onClick={onBack}
        className="mb-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
      >
        ← Volver
      </button>

      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>

      {/* GRID DE PRODUCTOS — AHORA MÁS PEQUEÑO Y COMPACTO */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.products.map((product) => {
          const priceBs = appliedRate
            ? roundTo50(product.priceUSD * appliedRate)
            : "Cargando...";

          return (
            <div
              key={product.id}
              className="border rounded-xl p-3 flex flex-col items-center shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              {/* IMAGEN MÁS PEQUEÑA */}
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-contain mb-2"
              />

              {/* NOMBRE */}
              <h3 className="text-sm font-semibold text-center leading-tight">
                {product.name}
              </h3>

              {/* PRECIO USD */}
              <p className="text-xs text-gray-600 mt-1">
                ${product.priceUSD.toFixed(2)}
              </p>

              {/* PRECIO BS */}
              <p className="text-lg font-bold text-green-700 mt-1">
                {priceBs} Bs
              </p>

              {/* BOTÓN AGREGAR */}
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-full text-xs"
              >
                Agregar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;


