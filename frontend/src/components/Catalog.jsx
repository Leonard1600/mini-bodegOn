import React from "react";
import { getImagePath } from "../utils/getImagePath";

function Catalog({ category, appliedRate, addToCart, onBack, getPriceBs }) {

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

      {/* GRID DE PRODUCTOS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.products.map((product) => {

          // Precio en Bs usando la tasa correcta (global o motos)
          const priceBs = getPriceBs(product);

          const imageSrc = getImagePath(category.id, product.slug);

          return (
            <div
              key={product.id}
              className="border rounded-xl p-2 flex flex-col items-center shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              {/* IMAGEN DEL PRODUCTO */}
              <img
                src={imageSrc}
                alt={product.name}
                className="w-full h-44 object-cover rounded-md mb-1"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/images/no-image.png";
                }}
              />

              {/* NOMBRE */}
              <h3 className="text-sm font-semibold text-center leading-snug">
                {product.name}
              </h3>

              {/* ============================
                  PRECIO (CONDICIÓN ESPECIAL)
                 ============================ */}

              {product.categoryId === "motos" ? (
                // SOLO MOTOS → SOLO PRECIO EN BS
                <p className="text-lg font-bold text-green-700 mt-0.5">
                  {priceBs} Bs
                </p>
              ) : (
                // TODAS LAS DEMÁS CATEGORÍAS → USD + BS
                <>
                  <p className="text-xs text-gray-600">
                    ${product.priceUSD.toFixed(2)}
                  </p>

                  <p className="text-lg font-bold text-green-700 mt-0.5">
                    {priceBs} Bs
                  </p>
                </>
              )}

              {/* BOTÓN AGREGAR */}
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs transition"
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