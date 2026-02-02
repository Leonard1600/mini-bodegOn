import React from "react";

function Catalog({ category, appliedRate, addToCart, onBack }) {
  // ====== REDONDEO ======
  const roundTo50 = (value) => {
    if (!value || isNaN(value)) return 0;
    return Math.ceil(value / 50) * 50;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow">
      <button
        onClick={onBack}
        className="mb-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
      >
        ← Volver
      </button>

      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {category.products.map((product) => {
          const priceBs = appliedRate
            ? roundTo50(product.priceUSD * appliedRate)
            : "Cargando...";

          return (
            <div
              key={product.id}
              className="border rounded-xl p-4 flex flex-col items-center shadow-sm bg-gray-50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mb-3"
              />

              <h3 className="text-lg font-semibold text-center">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                ${product.priceUSD.toFixed(2)}
              </p>

              <p className="text-xl font-bold text-green-700 mt-1">
                {priceBs} Bs
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-3 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full"
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalog;



