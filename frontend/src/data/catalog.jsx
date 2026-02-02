import viveres from "./categories/viveres.js";
import higiene from "./categories/higiene.js";
import detergentes from "./categories/detergentes.js";
import bebidas from "./categories/bebidas.js";
import charcuteria from "./categories/charcuteria.js";
import varios from "./categories/varios.js";
import tabaco from "./categories/tabaco.js";
import papeleria from "./categories/papeleria.js";

export const catalogByCategory = [
  {
    id: "viveres",
    name: "Víveres",
    image: "/viveres.jpg",
    products: viveres,
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "/bebidas.png",
    products: bebidas,
  },
  {
    id: "detergentes",
    name: "Detergentes",
    image: "/detergentes.png",
    products: detergentes,
  },
  {
    id: "charcuteria",
    name: "Charcutería",
    image: "/charcuteria.png",
    products: charcuteria,
  },
  {
    id: "confiteria",
    name: "Confitería",
    image: "/confiteria.png",
    products: [], // Aún no cargamos esta categoría
  },
  {
    id: "papeleria",
    name: "Papelería",
    image: "/papeleria.png",
    products: papeleria,
  },
  {
    id: "higiene",
    name: "Productos de higiene",
    image: "/productos de higiene.png",
    products: higiene,
  },
  {
    id: "varios",
    name: "Productos varios",
    image: "/productos varios.png",
    products: varios,
  },

  {
    id: "tabaco",
    name: "Tabaco",
    image: "/tabaco.png",
    products: tabaco,
  },

  {
    id: "helados-cali",
    name: "Helados Cali",
    image: "/helados cali.png",
    products: [], // Aún no cargamos esta categoría
  },

  // Última categoría
  {
    id: "repuestos-moto",
    name: "Repuestos de moto",
    image: "/repuestos de moto.png",
    products: [], // Aún no cargamos esta categoría
  },
];

const catalog = catalogByCategory.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    categoryName: category.name,
  }))
);

export default catalog;