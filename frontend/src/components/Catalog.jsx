import React from "react";
import CategorySection from "./CategorySection";

function Catalog({ category, appliedRate, addToCart, search }) {
  const searchLower = search.trim().toLowerCase();

  const filteredProducts = category.products.filter((product) =>
    product.name.toLowerCase().includes(searchLower)
  );

  return (
    <CategorySection
      title={category.name}
      products={filteredProducts}
      appliedRate={appliedRate}
      addToCart={addToCart}
    />
  );
}

export default Catalog;




