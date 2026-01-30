import React from 'react';
import ProductCard from './ProductCard'; // Importa ProductCard para cada producto

const Catalog = ({ appliedRate }) => {
  // Listado de categorías y productos (puedes agregar más categorías y productos según lo necesites)
  const categories = [
    { name: 'Víveres', products: [
        { id: 1, name: 'Arroz 1kg', priceUSD: 1.25, image: 'https://via.placeholder.com/300x200?text=Arroz' },
        { id: 2, name: 'Harina PAN', priceUSD: 1.1, image: 'https://via.placeholder.com/300x200?text=Harina+PAN' },
        // Agregar más productos aquí
      ]
    },
    { name: 'Bebidas', products: [
        { id: 3, name: 'Refresco 2L', priceUSD: 1.8, image: 'https://via.placeholder.com/300x200?text=Refresco' },
        // Agregar más productos aquí
      ]
    },
    // Agregar las demás categorías del cliente...
  ];

  return (
    <div className="mt-8">
      {categories.map((category) => (
        <section key={category.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product) => {
              const priceVES = product.priceUSD * appliedRate; // Conversión a VES
              return (
                <ProductCard key={product.id} product={product} priceVES={priceVES} />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Catalog;
