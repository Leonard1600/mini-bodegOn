import React, { useState } from "react";
import ProductCard from "./ProductCard";

function CategorySection({ title, products, appliedRate, addToCart }) {
  const [open, setOpen] = useState(true); // categoría desplegada por defecto

  const hasProducts = products.length > 0;

  return (
    <section className="mb-8 border-b border-amber-200 pb-4">
      {/* Header de la categoría */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-600">
          {open ? "Ocultar" : "Ver"}
        </span>
      </button>

      {/* Contenido */}
      {open && (
        <>
          {hasProducts ? (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priceVES={product.priceUSD * appliedRate}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-gray-500">
              No hay productos en esta categoría por ahora.
            </p>
          )}
        </>
      )}
    </section>
  );
}

export default CategorySection;




