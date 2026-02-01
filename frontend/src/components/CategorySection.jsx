import React, { useState } from "react";
import ProductCard from "./ProductCard";

function CategorySection({ title, products, appliedRate, addToCart }) {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const hasProducts = filteredProducts.length > 0;

  return (
    <section className="mb-8 border-b border-amber-200 pb-4">
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
          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-3 w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
          />

          {hasProducts ? (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredProducts.map((product) => (
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




