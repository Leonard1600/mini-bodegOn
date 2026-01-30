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
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        w-full
      "
    >
      {/* Nombre categoría */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {category.name}
      </h3>

      {/* Cantidad de productos */}
      <p className="text-sm text-gray-600">
        {productCount} {productCount === 1 ? "producto" : "productos"}
      </p>
    </div>
  );
}

export default CategoryCard;
