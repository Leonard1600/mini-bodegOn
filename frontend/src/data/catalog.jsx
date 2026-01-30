// Catálogo por categoría (fuente de verdad)
export const catalogByCategory = [
  {
    id: "viveres",
    name: "Víveres",
    products: [
      {
        id: 1,
        name: "Arroz 1kg",
        priceUSD: 1.25,
        image: "https://via.placeholder.com/300x200?text=Arroz",
      },
      {
        id: 2,
        name: "Harina PAN",
        priceUSD: 1.1,
        image: "https://via.placeholder.com/300x200?text=Harina+PAN",
      },
      {
        id: 3,
        name: "Azúcar 1kg",
        priceUSD: 0.95,
        image: "https://via.placeholder.com/300x200?text=Azucar",
      },
      {
        id: 4,
        name: "Aceite 1L",
        priceUSD: 2.4,
        image: "https://via.placeholder.com/300x200?text=Aceite",
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    products: [
      {
        id: 5,
        name: "Refresco 2L",
        priceUSD: 1.8,
        image: "https://via.placeholder.com/300x200?text=Refresco",
      },
    ],
  },
  {
    id: "detergentes",
    name: "Detergentes",
    products: [],
  },
  {
    id: "charcuteria",
    name: "Charcutería",
    products: [],
  },
  {
    id: "confiteria",
    name: "Confitería",
    products: [],
  },
  {
    id: "papeleria",
    name: "Papelería",
    products: [],
  },
  {
    id: "higiene",
    name: "Productos de higiene y detergentes",
    products: [],
  },
  {
    id: "varios",
    name: "Productos varios",
    products: [],
  },
  {
    id: "repuestos-moto",
    name: "Repuestos de moto",
    products: [],
  },
  {
    id: "helados-cali",
    name: "Helados Cali",
    products: [],
  },
];

// Catálogo plano (compatibilidad futura)
const catalog = catalogByCategory.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    category: category.name,
  }))
);

export default catalog;



