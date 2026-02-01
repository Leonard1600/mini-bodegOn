import React, { useState } from "react";
import ProductCard from "./ProductCard";

function CategorySection({ title, products, appliedRate, addToCart }) {
  const [open, setOpen] = useState(true);

  const hasProducts = products.length > 0;

  return (
    <section className="mb-6 border-b border-amber-200 pb-4">
      {/* Header de la categoría */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center text-left"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-sm text-gray-600">
          {open ? "Ocultar" : "Ver"}
        </span>
      </button>

      {/* Contenido */}
      {open && (
        <>
          {hasProducts ? (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
              No se encontraron productos.
            </p>
          )}
        </>
      )}
    </section>
  );
}

export default CategorySection;





