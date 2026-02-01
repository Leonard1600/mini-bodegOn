import React from "react";

function ProductCard({ product, priceVES, onAddToCart }) {
  const handleImageError = (e) => {
    e.target.src = "/no-image.png";
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-2 flex flex-col">
      {/* Imagen */}
      <img
        src={product.image}
        alt={product.name}
        onError={handleImageError}
        className="w-full h-24 object-cover rounded mb-2"
      />

      {/* Nombre */}
      <h3 className="text-sm font-medium leading-tight mb-1 line-clamp-2">
        {product.name}
      </h3>

      {/* Precio */}
      <p className="text-xs text-gray-700 mb-2">
        Bs.{" "}
        {priceVES.toLocaleString("es-VE", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>

      {/* Botón */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-amber-500 hover:bg-amber-600 text-white text-xs py-1.5 rounded"
      >
        Agregar
      </button>
    </div>
  );
}

export default ProductCard;



