const viveres = [
  { id: "viv-001", name: "Aceite Vatel 1L", priceUSD: 4.61, image: "" },
  { id: "viv-002", name: "Aceite La Pampa 850ml", priceUSD: 3.39, image: "" },
  { id: "viv-003", name: "Aceite La Pampa 700ml", priceUSD: 2.94, image: "" },
  { id: "viv-004", name: "Aceite La Pampa 500ml", priceUSD: 2.05, image: "" },

  { id: "viv-005", name: "Leche Condensada Tigo 395gr", priceUSD: 3.97, image: "" },

  { id: "viv-006", name: "Mantequilla Mavesa 500gr", priceUSD: 3.25, image: "" },
  { id: "viv-007", name: "Mantequilla Mavesa 250gr", priceUSD: 1.77, image: "" },
  { id: "viv-008", name: "Margarina La Pampa 225gr", priceUSD: 0.97, image: "" },
  { id: "viv-009", name: "Mantequilla Nelly 250gr", priceUSD: 1.52, image: "" },

  { id: "viv-010", name: "Salsa de Soya La China 150ml", priceUSD: 1.38, image: "" },
  { id: "viv-011", name: "Salsa de Ajo Lida Plus 150ml", priceUSD: 1.42, image: "" },
  { id: "viv-012", name: "Salsa Picante Don Pedro 150ml", priceUSD: 2.17, image: "" },
  { id: "viv-013", name: "Salsa Inglesa Iberia 300ml", priceUSD: 3.17, image: "" },

  { id: "viv-014", name: "Harina de Trigo La Pampa 920gr", priceUSD: 1.30, image: "" },
  { id: "viv-015", name: "Harina PAN 1kg", priceUSD: 1.76, image: "" },
  { id: "viv-016", name: "Harina Kaly Blanca 1kg", priceUSD: 1.63, image: "" },
  { id: "viv-017", name: "Harina Kaly Amarilla 1kg", priceUSD: 1.19, image: "" },

  { id: "viv-018", name: "Arroz Agua Blanca 900gr", priceUSD: 1.61, image: "" },
  { id: "viv-019", name: "Arroz Amanecer 900gr", priceUSD: 1.54, image: "" },
  { id: "viv-020", name: "Arroz Kaly Tradicional 900gr", priceUSD: 1.61, image: "" },
  { id: "viv-021", name: "Arroz Kaly Premium 900gr", priceUSD: 2.23, image: "" },

  { id: "viv-022", name: "Pasta Larga La Especial 1kg", priceUSD: 2.45, image: "" },
  { id: "viv-023", name: "Pasta Larga Capri 1kg", priceUSD: 2.45, image: "" },

  { id: "viv-024", name: "Sal Óptima 1kg", priceUSD: 0.52, image: "" },

  { id: "viv-025", name: "Café Della Nonna 100gr", priceUSD: 1.46, image: "" },
  { id: "viv-026", name: "Café Yocoima Rojo 100gr", priceUSD: 1.43, image: "" },
  { id: "viv-027", name: "Café Yocoima Dorado 100gr", priceUSD: 1.43, image: "" },
  { id: "viv-028", name: "Café Yocoima Rojo 200gr", priceUSD: 2.66, image: "" },
  { id: "viv-029", name: "Café Amanecer 100gr", priceUSD: 1.41, image: "" },
  { id: "viv-030", name: "Café Amanecer 200gr", priceUSD: 2.83, image: "" },

  { id: "viv-031", name: "Azúcar Konfit 1kg", priceUSD: 1.83, image: "" },

  { id: "viv-032", name: "Pasta Corta La Especial Dedal 1kg", priceUSD: 2.43, image: "" },
  { id: "viv-033", name: "Pasta Corta La Especial Tornillo 1kg", priceUSD: 2.43, image: "" },
  { id: "viv-034", name: "Pasta Corta Capri Pluma 1kg", priceUSD: 2.43, image: "" },

  { id: "viv-035", name: "Papas Fritas Modos 200gr", priceUSD: 1.39, image: "" },
  { id: "viv-036", name: "Maíz de Cotufa 400gr", priceUSD: 1.53, image: "" },
  { id: "viv-037", name: "Caraota Amanecer 400gr", priceUSD: 1.79, image: "" },

  { id: "viv-038", name: "Crema de Arroz Primor 225gr", priceUSD: 0.91, image: "" },
  { id: "viv-039", name: "Avena Quaker 200gr", priceUSD: 1.01, image: "" },
  { id: "viv-040", name: "Chicha Tigo 200gr", priceUSD: 1.63, image: "" },
  { id: "viv-041", name: "Bebida Achocolatada Tigo 200gr", priceUSD: 1.30, image: "" },

  { id: "viv-042", name: "Cereal Kellogg's Corn Flakes 230gr", priceUSD: 3.30, image: "" },

  { id: "viv-043", name: "Caldo de Pollo Laila (sobre)", priceUSD: 0.25, image: "" },
  { id: "viv-044", name: "Gelatina Montalbán 90gr", priceUSD: 1.73, image: "" },
  { id: "viv-045", name: "Sopa Maggi (sobre)", priceUSD: 1.55, image: "" },
  { id: "viv-046", name: "Cubito Maggi (unidad)", priceUSD: 0.25, image: "" },

  { id: "viv-047", name: "Mayonesa Mavesa 445gr", priceUSD: 4.45, image: "" },
  { id: "viv-048", name: "Mayonesa Mavesa 175gr", priceUSD: 2.00, image: "" },
  { id: "viv-049", name: "Mayonesa Sofía 175gr", priceUSD: 1.69, image: "" },
  { id: "viv-050", name: "Mayonesa Tigo 250gr", priceUSD: 1.85, image: "" },

  { id: "viv-051", name: "Salsa de Tomate Pampero 397gr", priceUSD: 2.42, image: "" },
  { id: "viv-052", name: "Salsa de Tomate Pampero 198gr", priceUSD: 1.82, image: "" },

  { id: "viv-053", name: "Vinagre Tiquire Flores 500ml", priceUSD: 1.56, image: "" },

  { id: "viv-054", name: "Pasta de Tomate Heinz 200gr", priceUSD: 3.02, image: "" },

  { id: "viv-055", name: "Diablito Underwood 115gr", priceUSD: 3.52, image: "" },

  { id: "viv-056", name: "Sardina Omega (lata)", priceUSD: 0.98, image: "" },
  { id: "viv-057", name: "Sardina Marbonita (lata)", priceUSD: 0.79, image: "" },

  { id: "viv-058", name: "Atún en Aceite Willinger 170gr", priceUSD: 2.08, image: "" },
  { id: "viv-059", name: "Pepitona Margarita 140gr", priceUSD: 2.26, image: "" },

  { id: "viv-060", name: "Rikesa 200gr", priceUSD: 4.55, image: "" },

  { id: "viv-061", name: "Compota Heinz Lonchera 113gr", priceUSD: 1.47, image: "" },
  { id: "viv-062", name: "Compota Heinz Vidrio 113gr", priceUSD: 1.03, image: "" },
  { id: "viv-063", name: "Compota Tigo 113gr", priceUSD: 0.90, image: "" },

  { id: "viv-064", name: "Leche Kaly 200gr", priceUSD: 2.86, image: "" },
  { id: "viv-065", name: "Leche La Campiña 200gr", priceUSD: 3.76, image: "" },
  { id: "viv-066", name: "Leche La Campesina 400gr", priceUSD: 8.26, image: "" },

  { id: "viv-067", name: "Condimentos Varios (sobre)", priceUSD: 0.26, image: "" },
];

export default viveres;
