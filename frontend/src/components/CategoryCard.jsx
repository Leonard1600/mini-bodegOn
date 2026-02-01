import React from "react";

function CategoryCard({ category, onSelect }) {
  const productCount = category.products.length;

  return (
    <div
      onClick={() => onSelect(category)}
      className="
        cursor-pointer
        bg-white
        border
        rounded-lg
        shadow-sm
        hover:shadow-md
        transition
        p-4
        flex
        flex-col
        items-center
        justify-center
        text-center
        w-full
      "
    >
      {/* Nombre categoría */}
      <h3 className="text-sm font-semibold text-gray-800 mb-1">
        {category.name}
      </h3>

      {/* Cantidad de productos */}
      <p className="text-xs text-gray-600">
        {productCount} {productCount === 1 ? "producto" : "productos"}
      </p>
    </div>
  );
}

export default CategoryCard;
