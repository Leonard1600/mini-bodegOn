import React from "react";

function ProductCard({ product, priceVES, onAddToCart }) {
  const handleImageError = (e) => {
    e.target.src = "/no-image.png"; // imagen local de respaldo
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        onError={handleImageError}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="font-semibold text-lg">{product.name}</h3>

      <p className="text-sm text-gray-600 mb-2">
        Bs.{" "}
        {priceVES.toLocaleString("es-VE", {
          minimumFractionDigits: 2,
        })}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;


