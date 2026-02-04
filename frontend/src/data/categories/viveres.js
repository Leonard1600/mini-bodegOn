const viveres = [
  { id: "viv-001", name: "Aceite Vatel 1L", priceUSD: 4.61, slug: "aceite_vatel_1l" },
  { id: "viv-002", name: "Aceite La Pampa 850ml", priceUSD: 3.39, slug: "aceite_la_pampa_850ml" },
  { id: "viv-003", name: "Aceite La Pampa 700ml", priceUSD: 2.94, slug: "aceite_la_pampa_700ml" },
  { id: "viv-004", name: "Aceite La Pampa 500ml", priceUSD: 2.05, slug: "aceite_la_pampa_500ml" },

  { id: "viv-005", name: "Leche Condensada Tigo 395gr", priceUSD: 3.97, slug: "leche_condensada_tigo_395gr" },

  { id: "viv-006", name: "Mantequilla Mavesa 500gr", priceUSD: 3.25, slug: "mantequilla_mavesa_500gr" },
  { id: "viv-007", name: "Mantequilla Mavesa 250gr", priceUSD: 1.77, slug: "mantequilla_mavesa_250gr" },
  { id: "viv-008", name: "Margarina La Pampa 225gr", priceUSD: 0.97, slug: "margarina_la_pampa_225gr" },
  { id: "viv-009", name: "Mantequilla Nelly 250gr", priceUSD: 1.52, slug: "mantequilla_nelly_250gr" },

  { id: "viv-010", name: "Salsa de Soya La China 150ml", priceUSD: 1.38, slug: "salsa_de_soya_la_china_150ml" },
  { id: "viv-011", name: "Salsa de Ajo Lida Plus 150ml", priceUSD: 1.42, slug: "salsa_de_ajo_lida_plus_150ml" },
  { id: "viv-012", name: "Salsa Picante Don Pedro 150ml", priceUSD: 2.17, slug: "salsa_picante_don_pedro_150ml" },
  { id: "viv-013", name: "Salsa Inglesa Iberia 300ml", priceUSD: 3.17, slug: "salsa_inglesa_iberia_300ml" },

  { id: "viv-014", name: "Harina de Trigo La Pampa 920gr", priceUSD: 1.30, slug: "harina_de_trigo_la_pampa_920gr" },
  { id: "viv-015", name: "Harina PAN 1kg", priceUSD: 1.76, slug: "harina_pan_1kg" },
  { id: "viv-016", name: "Harina Kaly Blanca 1kg", priceUSD: 1.63, slug: "harina_kaly_blanca_1kg" },
  { id: "viv-017", name: "Harina Kaly Amarilla 1kg", priceUSD: 1.19, slug: "harina_kaly_amarilla_1kg" },

  { id: "viv-018", name: "Arroz Agua Blanca 900gr", priceUSD: 1.61, slug: "arroz_agua_blanca_900gr" },
  { id: "viv-019", name: "Arroz Amanecer 900gr", priceUSD: 1.54, slug: "arroz_amanecer_900gr" },
  { id: "viv-020", name: "Arroz Kaly Tradicional 900gr", priceUSD: 1.61, slug: "arroz_kaly_tradicional_900gr" },
  { id: "viv-021", name: "Arroz Kaly Premium 900gr", priceUSD: 2.23, slug: "arroz_kaly_premium_900gr" },

  { id: "viv-022", name: "Pasta Larga La Especial 1kg", priceUSD: 2.45, slug: "pasta_larga_la_especial_1kg" },
  { id: "viv-023", name: "Pasta Larga Capri 1kg", priceUSD: 2.45, slug: "pasta_larga_capri_1kg" },

  { id: "viv-024", name: "Sal Optima 1kg", priceUSD: 0.52, slug: "sal_optima_1kg" },

  { id: "viv-025", name: "Cafe Della Nonna 100gr", priceUSD: 1.46, slug: "cafe_della_nonna_100gr" },
  { id: "viv-026", name: "Cafe Yocoima Rojo 100gr", priceUSD: 1.43, slug: "cafe_yocoima_rojo_100gr" },
  { id: "viv-027", name: "Cafe Yocoima Dorado 100gr", priceUSD: 1.43, slug: "cafe_yocoima_dorado_100gr" },
  { id: "viv-028", name: "Cafe Yocoima Rojo 200gr", priceUSD: 2.66, slug: "cafe_yocoima_rojo_200gr" },
  { id: "viv-029", name: "Cafe Amanecer 100gr", priceUSD: 1.41, slug: "cafe_amanecer_100gr" },
  { id: "viv-030", name: "Cafe Amanecer 200gr", priceUSD: 2.83, slug: "cafe_amanecer_200gr" },

  { id: "viv-031", name: "Azucar Konfit 1kg", priceUSD: 1.83, slug: "azucar_konfit_1kg" },

  { id: "viv-032", name: "Pasta Corta La Especial Dedal 1kg", priceUSD: 2.43, slug: "pasta_corta_la_especial_dedal_1kg" },
  { id: "viv-033", name: "Pasta Corta La Especial Tornillo 1kg", priceUSD: 2.43, slug: "pasta_corta_la_especial_tornillo_1kg" },
  { id: "viv-034", name: "Pasta Corta Capri Pluma 1kg", priceUSD: 2.43, slug: "pasta_corta_capri_pluma_1kg" },

  { id: "viv-035", name: "Papas Fritas Modos 200gr", priceUSD: 1.39, slug: "papas_fritas_modos_200gr" },
  { id: "viv-036", name: "Maiz de Cotufa 400gr", priceUSD: 1.53, slug: "maiz_de_cotufa_400gr" },
  { id: "viv-037", name: "Caraota Amanecer 400gr", priceUSD: 1.79, slug: "caraota_amanecer_400gr" },

  { id: "viv-038", name: "Crema de Arroz Primor 225gr", priceUSD: 0.91, slug: "crema_de_arroz_primor_225gr" },
  { id: "viv-039", name: "Avena Quaker 200gr", priceUSD: 1.01, slug: "avena_quaker_200gr" },
  { id: "viv-040", name: "Chicha Tigo 200gr", priceUSD: 1.63, slug: "chicha_tigo_200gr" },
  { id: "viv-041", name: "Bebida Achocolatada Tigo 200gr", priceUSD: 1.30, slug: "bebida_achocolatada_tigo_200gr" },

  { id: "viv-042", name: "Cereal Kelloggs Corn Flakes 230gr", priceUSD: 3.30, slug: "cereal_kelloggs_corn_flakes_230gr" },

  { id: "viv-043", name: "Caldo de Pollo Laila sobre", priceUSD: 0.25, slug: "caldo_de_pollo_laila_sobre" },
  { id: "viv-044", name: "Gelatina Montalban 90gr", priceUSD: 1.73, slug: "gelatina_montalban_90gr" },
  { id: "viv-045", name: "Sopa Maggi sobre", priceUSD: 1.55, slug: "sopa_maggi_sobre" },
  { id: "viv-046", name: "Cubito Maggi unidad", priceUSD: 0.25, slug: "cubito_maggi_unidad" },

  { id: "viv-047", name: "Mayonesa Mavesa 445gr", priceUSD: 4.45, slug: "mayonesa_mavesa_445gr" },
  { id: "viv-048", name: "Mayonesa Mavesa 175gr", priceUSD: 2.00, slug: "mayonesa_mavesa_175gr" },
  { id: "viv-049", name: "Mayonesa Sofia 175gr", priceUSD: 1.69, slug: "mayonesa_sofia_175gr" },
  { id: "viv-050", name: "Mayonesa Tigo 250gr", priceUSD: 1.85, slug: "mayonesa_tigo_250gr" },

  { id: "viv-051", name: "Salsa de Tomate Pampero 397gr", priceUSD: 2.42, slug: "salsa_de_tomate_pampero_397gr" },
  { id: "viv-052", name: "Salsa de Tomate Pampero 198gr", priceUSD: 1.82, slug: "salsa_de_tomate_pampero_198gr" },

  { id: "viv-053", name: "Vinagre Tiquire Flores 500ml", priceUSD: 1.56, slug: "vinagre_tiquire_flores_500ml" },

  { id: "viv-054", name: "Pasta de Tomate Heinz 200gr", priceUSD: 3.02, slug: "pasta_de_tomate_heinz_200gr" },

  { id: "viv-055", name: "Diablito Underwood 115gr", priceUSD: 3.52, slug: "diablito_underwood_115gr" },

  { id: "viv-056", name: "Sardina Omega lata", priceUSD: 0.98, slug: "sardina_omega_lata" },
  { id: "viv-057", name: "Sardina Marbonita lata", priceUSD: 0.79, slug: "sardina_marbonita_lata" },

  { id: "viv-058", name: "Atun en Aceite Willinger 170gr", priceUSD: 2.08, slug: "atun_en_aceite_willinger_170gr" },
  { id: "viv-059", name: "Pepitona Margarita 140gr", priceUSD: 2.26, slug: "pepitona_margarita_140gr" },

  { id: "viv-060", name: "Rikesa 200gr", priceUSD: 4.55, slug: "rikesa_200gr" },

  { id: "viv-061", name: "Compota Heinz Lonchera 113gr", priceUSD: 1.47, slug: "compota_heinz_lonchera_113gr" },
  { id: "viv-062", name: "Compota Heinz Vidrio 113gr", priceUSD: 1.03, slug: "compota_heinz_vidrio_113gr" },
  { id: "viv-063", name: "Compota Tigo 113gr", priceUSD: 0.90, slug: "compota_tigo_113gr" },

  { id: "viv-064", name: "Leche Kaly 200gr", priceUSD: 2.86, slug: "leche_kaly_200gr" },
  { id: "viv-065", name: "Leche La Campina 200gr", priceUSD: 3.76, slug: "leche_la_campina_200gr" },
  { id: "viv-066", name: "Leche La Campesina 400gr", priceUSD: 8.26, slug: "leche_la_campesina_400gr" },

  { id: "viv-067", name: "Condimentos Varios sobre", priceUSD: 0.26, slug: "condimentos_varios_sobre" },
];

export default viveres;