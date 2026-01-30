import viveres from "./categories/viveres.js"; // Importando viveres.js
import higiene from "./categories/higiene.js"; // Importando higiene.js
import detergentes from "./categories/detergentes.js"; // Importando detergentes.js

export const catalogByCategory = [
  {
    id: "viveres",
    name: "Víveres",
    image: "/viveres.jpg",
    products: viveres, // Usando los productos de viveres.js
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "/bebidas.png",
    products: [],
  },
  {
    id: "detergentes",
    name: "Detergentes",
    image: "/detergentes.png",
    products: detergentes, // Usando los productos de detergentes.js
  },
  {
    id: "charcuteria",
    name: "Charcutería",
    image: "/charcuteria.png",
    products: [],
  },
  {
    id: "confiteria",
    name: "Confitería",
    image: "/confiteria.png",
    products: [],
  },
  {
    id: "papeleria",
    name: "Papelería",
    image: "/papeleria.png",
    products: [],
  },
  {
    id: "higiene",
    name: "Productos de higiene",
    image: "/productos de higiene.png",
    products: higiene, // Usando los productos de higiene.js
  },
  {
    id: "varios",
    name: "Productos varios",
    image: "/productos varios.png",
    products: [],
  },
  {
    id: "repuestos-moto",
    name: "Repuestos de moto",
    image: "/repuestos de moto.png",
    products: [],
  },
  {
    id: "helados-cali",
    name: "Helados Cali",
    image: "/helados cali.png",
    products: [],
  },
];

// Export plano (opcional)
const catalog = catalogByCategory.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    categoryName: category.name,
  }))
);

export default catalog;
