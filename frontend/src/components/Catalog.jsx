import React from "react";
import ProductCard from "./ProductCard";

const Catalog = ({ category, appliedRate, addToCart }) => {
  if (!category) return null;

  const { name, products } = category;

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Productos de {name}
      </h2>

      {products.length === 0 ? (
        <p className="text-gray-600">
          No hay productos en esta categoría por ahora.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              priceVES={product.priceUSD * appliedRate}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Catalog;



