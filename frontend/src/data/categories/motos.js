const motos = [
  { id: "mot-001", name: "Anillo A150 STD Acerado BENF", priceUSD: 3.14, slug: "anillo_a150_std_acerado_benf" },
  { id: "mot-002", name: "Anillo CG-150 STD BENF", priceUSD: 1.76, slug: "anillo_cg150_std_benf" },
  { id: "mot-003", name: "Anillo Horse STD BENF", priceUSD: 2.00, slug: "anillo_horse_std_benf" },
  { id: "mot-004", name: "Anti Espiche 500ml BENF", priceUSD: 2.00, slug: "anti_espiche_500ml_benf" },
  { id: "mot-005", name: "Automático Horse-Tex-200 BENF", priceUSD: 3.54, slug: "automatico_horse_tex_200_benf" },

  { id: "mot-006", name: "Banda de Freno Horse Biselada BENF", priceUSD: 2.80, slug: "banda_freno_horse_biselada_benf" },
  { id: "mot-007", name: "Banda de Freno LN Biselada BENF", priceUSD: 2.69, slug: "banda_freno_ln_biselada_benf" },
  { id: "mot-008", name: "Bobina CG-150 BENF", priceUSD: 2.45, slug: "bobina_cg150_benf" },
  { id: "mot-009", name: "Bomba de Aceite Horse BENF", priceUSD: 2.58, slug: "bomba_aceite_horse_benf" },
  { id: "mot-010", name: "Bomba de Freno Horse-A150 BENF", priceUSD: 6.66, slug: "bomba_freno_horse_a150_benf" },

  { id: "mot-011", name: "Bombillo LED BF-SC-502", priceUSD: 1.04, slug: "bombillo_led_bf_sc_502" },
  { id: "mot-012", name: "Bombillo LED BF-SC-629", priceUSD: 0.50, slug: "bombillo_led_bf_sc_629" },
  { id: "mot-013", name: "Bombillo LED BF-802", priceUSD: 3.36, slug: "bombillo_led_bf_802" },
  { id: "mot-014", name: "Bombillo LED Muelita BF-T-517", priceUSD: 1.22, slug: "bombillo_led_muelita_bf_t_517" },
  { id: "mot-015", name: "Bombillo LED Muelita BF-T-518", priceUSD: 0.57, slug: "bombillo_led_muelita_bf_t_518" },
  { id: "mot-016", name: "Bombillo LED Muelita 803 BENF", priceUSD: 0.57, slug: "bombillo_led_muelita_803_benf" },

  { id: "mot-017", name: "Buje Amortiguador BENF", priceUSD: 0.57, slug: "buje_amortiguador_benf" },
  { id: "mot-018", name: "Buje Horquilla Jaguar BENF", priceUSD: 0.95, slug: "buje_horquilla_jaguar_benf" },
  { id: "mot-019", name: "Buje Horquilla Horse 12mm BENF", priceUSD: 1.16, slug: "buje_horquilla_horse_12mm_benf" },

  { id: "mot-020", name: "Bujía D8TC BENF", priceUSD: 0.69, slug: "bujia_d8tc_benf" },

  { id: "mot-021", name: "CDI CG-150 BENF", priceUSD: 1.60, slug: "cdi_cg150_benf" },
  { id: "mot-022", name: "CDI Horse BENF", priceUSD: 4.52, slug: "cdi_horse_benf" },

  { id: "mot-023", name: "Corneta Horse BENF", priceUSD: 4.52, slug: "corneta_horse_benf" },

  { id: "mot-024", name: "Corona GEN 38T Dorada BENF", priceUSD: 3.78, slug: "corona_gen_38t_dorada_benf" },
  { id: "mot-025", name: "Corona MDE 38T BENF", priceUSD: 3.92, slug: "corona_mde_38t_benf" },

  { id: "mot-026", name: "Crochera Completa CG-150 5T BENF", priceUSD: 15.30, slug: "crochera_completa_cg150_5t_benf" },
  { id: "mot-027", name: "Crochera Completa CG-150 6T BENF", priceUSD: 16.07, slug: "crochera_completa_cg150_6t_benf" },

  { id: "mot-028", name: "Cuenta Kilometraje A150 BENF", priceUSD: 2.84, slug: "cuenta_kilometraje_a150_benf" },
  { id: "mot-029", name: "Cuenta Kilometraje Horse BENF", priceUSD: 2.84, slug: "cuenta_kilometraje_horse_benf" },

  { id: "mot-030", name: "Disco Clutch CG-150 (6 Pzas) BENF", priceUSD: 2.58, slug: "disco_clutch_cg150_6pzas_benf" },

  { id: "mot-031", name: "Eje Abre Banda Horse BENF", priceUSD: 1.46, slug: "eje_abre_banda_horse_benf" },
  { id: "mot-032", name: "Eje Delantero Horse con Buje BENF", priceUSD: 1.13, slug: "eje_delantero_horse_buje_benf" },
  { id: "mot-033", name: "Eje Horquilla CG-150 BENF", priceUSD: 1.10, slug: "eje_horquilla_cg150_benf" },
  { id: "mot-034", name: "Eje Horquilla Horse BENF", priceUSD: 1.10, slug: "eje_horquilla_horse_benf" },
  { id: "mot-035", name: "Eje Trasero CG-150 con Buje BENF", priceUSD: 2.18, slug: "eje_trasero_cg150_buje_benf" },
  { id: "mot-036", name: "Eje Trasero Horse con Buje BENF", priceUSD: 2.39, slug: "eje_trasero_horse_buje_benf" },

  { id: "mot-037", name: "Empacadura Crochera BENF", priceUSD: 0.30, slug: "empacadura_crochera_benf" },
  { id: "mot-038", name: "Empacadura Magneto BENF", priceUSD: 0.15, slug: "empacadura_magneto_benf" },

  { id: "mot-039", name: "Flasher con Sonido BENF", priceUSD: 0.99, slug: "flasher_sonido_benf" },

  { id: "mot-040", name: "Grasa Azul 100gr BENF", priceUSD: 1.23, slug: "grasa_azul_100gr_benf" },

  { id: "mot-041", name: "Guaya Aceleración A150 BENF", priceUSD: 1.05, slug: "guaya_aceleracion_a150_benf" },
  { id: "mot-042", name: "Guaya Aceleración Horse BENF", priceUSD: 1.05, slug: "guaya_aceleracion_horse_benf" },
  { id: "mot-043", name: "Guaya Clutch A150 BENF", priceUSD: 1.16, slug: "guaya_clutch_a150_benf" },
  { id: "mot-044", name: "Guaya Clutch Horse BENF", priceUSD: 1.16, slug: "guaya_clutch_horse_benf" },
  { id: "mot-045", name: "Guaya Clutch Universal con Perro BENF", priceUSD: 0.32, slug: "guaya_clutch_universal_perro_benf" },
  { id: "mot-046", name: "Guaya Kilometraje LN-GNE-A150", priceUSD: 1.16, slug: "guaya_kilometraje_ln_gne_a150" },
  { id: "mot-047", name: "Guaya Kilometraje Horse BENF", priceUSD: 1.16, slug: "guaya_kilometraje_horse_benf" },

  { id: "mot-048", name: "Guía Válvulas CG-150 BENF", priceUSD: 0.99, slug: "guia_valvulas_cg150_benf" },

  { id: "mot-049", name: "Kit Biela CG-150 BENF", priceUSD: 7.40, slug: "kit_biela_cg150_benf" },
  { id: "mot-050", name: "Kit Biela Horse-A150 BENF", priceUSD: 7.40, slug: "kit_biela_horse_a150_benf" },

  { id: "mot-051", name: "Kit Cremallera CG-150 BENF", priceUSD: 0.54, slug: "kit_cremallera_cg150_benf" },
  { id: "mot-052", name: "Kit Crochera CG-150 BENF", priceUSD: 1.94, slug: "kit_crochera_cg150_benf" },
  { id: "mot-053", name: "Kit Empacadura CG-150 con Letras BENF", priceUSD: 1.76, slug: "kit_empacadura_cg150_letras_benf" },
  { id: "mot-054", name: "Kit Estopera CG-150 BENF", priceUSD: 0.95, slug: "kit_estopera_cg150_benf" },

  { id: "mot-055", name: "Leva Croche Motor A150 BNF", priceUSD: 1.83, slug: "leva_croche_motor_a150_bnf" },
  { id: "mot-056", name: "Leva Croche Motor CG-125 BNF", priceUSD: 1.83, slug: "leva_croche_motor_cg125_bnf" },

  { id: "mot-057", name: "Luz Cruce A150 BENF", priceUSD: 1.92, slug: "luz_cruce_a150_benf" },
  { id: "mot-058", name: "Luz Cruce Horse Modelo Nuevo BENF", priceUSD: 1.53, slug: "luz_cruce_horse_modelo_nuevo_benf" },

  { id: "mot-059", name: "Magneto CG-150 con Cremallera BENF", priceUSD: 11.48, slug: "magneto_cg150_cremallera_benf" },

  { id: "mot-060", name: "Manguera Gasolina 20mts Negro", priceUSD: 4.89, slug: "manguera_gasolina_20mts_negro" },

  { id: "mot-061", name: "Manilla Clutch Completa Horse BENF", priceUSD: 2.30, slug: "manilla_clutch_completa_horse_benf" },

  { id: "mot-062", name: "O-Ring Tapa Cámara BENF", priceUSD: 0.18, slug: "oring_tapa_camara_benf" },

  { id: "mot-063", name: "Caja Parcho 24 Unidades BENF", priceUSD: 1.68, slug: "caja_parcho_24_benf" },

  { id: "mot-064", name: "Pastilla de Freno CG-150 BENF", priceUSD: 0.89, slug: "pastilla_freno_cg150_benf" },
  { id: "mot-065", name: "Pastilla de Freno A150 BENF", priceUSD: 0.95, slug: "pastilla_freno_a150_benf" },
  { id: "mot-066", name: "Pastilla de Freno Horse ZB BENF", priceUSD: 0.89, slug: "pastilla_freno_horse_zb_benf" },

  { id: "mot-067", name: "Pedal de Cambio CG-150 BENF", priceUSD: 1.76, slug: "pedal_cambio_cg150_benf" },
  { id: "mot-068", name: "Pedal de Cambio Horse BENF", priceUSD: 2.07, slug: "pedal_cambio_horse_benf" },

  { id: "mot-069", name: "Piñón CG-150 17T BENF", priceUSD: 1.00, slug: "pinon_cg150_17t_benf" },
  { id: "mot-070", name: "Piñón Horse 15T BENF", priceUSD: 1.16, slug: "pinon_horse_15t_benf" },

  { id: "mot-071", name: "Pipa Bujía BENF", priceUSD: 0.30, slug: "pipa_bujia_benf" },

  { id: "mot-072", name: "Pistón CG-150 Pasador Grueso STD BENF", priceUSD: 5.61, slug: "piston_cg150_pasador_grueso_std_benf" },

  { id: "mot-073", name: "Porta Banda A150 BENF", priceUSD: 9.48, slug: "porta_banda_a150_benf" },
  { id: "mot-074", name: "Porta Banda Horse BENF", priceUSD: 11.48, slug: "porta_banda_horse_benf" },
  { id: "mot-075", name: "Porta Banda MD-Águila BENF", priceUSD: 9.65, slug: "porta_banda_md_aguila_benf" },

  { id: "mot-076", name: "Porta Corona A150 BENF", priceUSD: 6.66, slug: "porta_corona_a150_benf" },
  { id: "mot-077", name: "Porta Corona Horse BENF", priceUSD: 6.89, slug: "porta_corona_horse_benf" },
  { id: "mot-078", name: "Porta Corona MD-Águila BENF", priceUSD: 5.66, slug: "porta_corona_md_aguila_benf" },

  { id: "mot-079", name: "Porta Fusible BENF", priceUSD: 0.41, slug: "porta_fusible_benf" },

  { id: "mot-080", name: "Prensa Cadena Horse BENF", priceUSD: 1.37, slug: "prensa_cadena_horse_benf" },

  { id: "mot-081", name: "Retén Piñón A150 BENF", priceUSD: 0.24, slug: "reten_pinon_a150_benf" },
  { id: "mot-082", name: "Retén Piñón Horse BENF", priceUSD: 0.33, slug: "reten_pinon_horse_benf" },

  { id: "mot-083", name: "Rolinera 6004 BENF", priceUSD: 0.81, slug: "rolinera_6004_benf" },
  { id: "mot-084", name: "Rolinera Trasera Completa Bera 6202 BENF", priceUSD: 0.63, slug: "rolinera_trasera_completa_bera_6202_benf" },
  { id: "mot-085", name: "Rolinera Trasera Completa Bera 6204 BENF", priceUSD: 1.00, slug: "rolinera_trasera_completa_bera_6204_benf" },
  { id: "mot-086", name: "Rolinera Trasera Completa Bera 6301 BENF", priceUSD: 0.69, slug: "rolinera_trasera_completa_bera_6301_benf" },
  { id: "mot-087", name: "Rolinera Trasera Completa Bera 6302 BENF", priceUSD: 0.84, slug: "rolinera_trasera_completa_bera_6302_benf" },

  { id: "mot-088", name: "Suichera A150 BENF", priceUSD: 3.53, slug: "suichera_a150_benf" },
  { id: "mot-089", name: "Suichera Horse BENF", priceUSD: 3.53, slug: "suichera_horse_benf" },

  { id: "mot-090", name: "Tapa Gasolina Horse A150 BENF", priceUSD: 5.90, slug: "tapa_gasolina_horse_a150_benf" },
  { id: "mot-091", name: "Tapón Tiempo y Magneto BENF", priceUSD: 0.77, slug: "tapon_tiempo_magneto_benf" },

  { id: "mot-092", name: "Taza Manubrio CG-150 Cónica BENF", priceUSD: 1.68, slug: "taza_manubrio_cg150_conica_benf" },
  { id: "mot-093", name: "Taza Manubrio CG-150 Municiones BENF", priceUSD: 1.53, slug: "taza_manubrio_cg150_municiones_benf" },

  { id: "mot-094", name: "Teipe 20m BENF", priceUSD: 0.54, slug: "teipe_20m_benf" },
  { id: "mot-095", name: "Tornillo Corona BENF", priceUSD: 0.54, slug: "tornillo_corona_benf" },

  { id: "mot-096", name: "Tripa 300-18 BENF", priceUSD: 3.06, slug: "tripa_300_18_benf" },

  { id: "mot-097", name: "Válvula CG-150 Pata Corta BENF", priceUSD: 1.29, slug: "valvula_cg150_pata_corta_benf" },
  { id: "mot-098", name: "Válvula CG-150 Pata Larga BENF", priceUSD: 1.53, slug: "valvula_cg150_pata_larga_benf" },
  { id: "mot-099", name: "Válvula Clutch BENF", priceUSD: 0.23, slug: "valvula_clutch_benf" },

  { id: "mot-100", name: "Varilla de Freno CG-150 BENF", priceUSD: 0.54, slug: "varilla_freno_cg150_benf" },
  { id: "mot-101", name: "Varilla de Freno Horse BENF", priceUSD: 0.62, slug: "varilla_freno_horse_benf" },

  { id: "mot-102", name: "Puño Color Rojo BENF", priceUSD: 2.82, slug: "puno_color_rojo_benf" },
  { id: "mot-103", name: "Puño Color Azul BENF", priceUSD: 2.82, slug: "puno_color_azul_benf" },
  { id: "mot-104", name: "Puño Color Dorado BENF", priceUSD: 2.82, slug: "puno_color_dorado_benf" },
  { id: "mot-105", name: "Puño Color Negro BENF", priceUSD: 2.82, slug: "puno_color_negro_benf" },
  { id: "mot-106", name: "Puño Color Aluminio Morado BENF", priceUSD: 3.60, slug: "puno_color_aluminio_morado_benf" },
];

export default motos;