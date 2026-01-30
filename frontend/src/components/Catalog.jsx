import React from "react";
import ProductCard from "./ProductCard";
import { catalogByCategory } from "../data/catalog";

const Catalog = ({ appliedRate }) => {
  return (
    <div className="mt-8">
      {catalogByCategory.map((category) => (
        <section key={category.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            {category.name}
          </h2>

          {category.products.length === 0 ? (
            <p className="text-gray-500">
              Próximamente productos disponibles
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => {
                const priceVES = product.priceUSD * appliedRate;

                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    priceVES={priceVES}
                  />
                );
              })}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Catalog;

