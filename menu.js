// Catálogo de precios de TROTA Run & Café.
// Para cambiar un precio o agregar un producto, edita este archivo.
// Cada producto tiene una o más presentaciones { t: tamaño, p: precio }.
// Fuente: COSTEO Proyecto TROTA.xlsx (hoja MENU) y hoja Eventos Coffee Break.

window.TROTA_MENU = [
  {
    cat: "Bebidas calientes",
    items: [
      { n: "Espresso", s: [{ t: "4 oz", p: 35 }] },
      { n: "Espresso doble", s: [{ t: "4 oz", p: 45 }] },
      { n: "Americano", s: [{ t: "R 8 oz", p: 50 }, { t: "G 12 oz", p: 60 }] },
      { n: "Cappuccino", s: [{ t: "R 8 oz", p: 65 }, { t: "G 12 oz", p: 75 }] },
      { n: "Flat White", s: [{ t: "R 8 oz", p: 55 }] },
      { n: "Latte", s: [{ t: "R 8 oz", p: 65 }, { t: "G 12 oz", p: 75 }] },
      { n: "Chocolate", s: [{ t: "R 8 oz", p: 55 }, { t: "G 12 oz", p: 65 }] },
      { n: "Mocaccino", s: [{ t: "R 8 oz", p: 70 }, { t: "G 12 oz", p: 80 }] },
      { n: "PB Mocaccino", s: [{ t: "R 8 oz", p: 75 }, { t: "G 12 oz", p: 85 }] },
      { n: "Matcha Latte", s: [{ t: "R 8 oz", p: 70 }, { t: "G 12 oz", p: 80 }] },
      { n: "Chai", s: [{ t: "R 8 oz", p: 70 }, { t: "G 12 oz", p: 80 }] },
      { n: "Golden Milk", s: [{ t: "R 8 oz", p: 70 }, { t: "G 12 oz", p: 80 }] },
      { n: "Té (verde, negro, jazmín, tisana)", s: [{ t: "R 8 oz", p: 60 }, { t: "G 12 oz", p: 70 }] }
    ]
  },
  {
    cat: "Bebidas frías",
    items: [
      { n: "Cold Brew", s: [{ t: "12 oz", p: 65 }] },
      { n: "Latte frío", s: [{ t: "R 12 oz", p: 75 }, { t: "G 16 oz", p: 85 }] },
      { n: "Chocolate frío", s: [{ t: "R 12 oz", p: 65 }, { t: "G 16 oz", p: 75 }] },
      { n: "Mocaccino frío", s: [{ t: "R 12 oz", p: 80 }, { t: "G 16 oz", p: 90 }] },
      { n: "PB Mocaccino frío", s: [{ t: "R 12 oz", p: 85 }, { t: "G 16 oz", p: 95 }] },
      { n: "Matcha frío", s: [{ t: "R 12 oz", p: 80 }, { t: "G 16 oz", p: 90 }] },
      { n: "Chai frío", s: [{ t: "R 12 oz", p: 80 }, { t: "G 16 oz", p: 90 }] },
      { n: "Golden Milk frío", s: [{ t: "R 12 oz", p: 80 }, { t: "G 16 oz", p: 90 }] },
      { n: "Té frío", s: [{ t: "R 12 oz", p: 70 }, { t: "G 16 oz", p: 80 }] }
    ]
  },
  {
    cat: "Tónicos y lattes en lata",
    items: [
      { n: "Espresso Tonic", s: [{ t: "Lata Ch 8 oz", p: 70 }] },
      { n: "TROTA Tonic", s: [{ t: "Lata G 16 oz", p: 90 }] },
      { n: "Orange Brew", s: [{ t: "Lata G 16 oz", p: 75 }] },
      { n: "Ginger Brew", s: [{ t: "Lata G 16 oz", p: 60 }] },
      { n: "Blueberry Latte", s: [{ t: "Lata G 16 oz", p: 95 }] },
      { n: "Banana Latte", s: [{ t: "Lata G 16 oz", p: 85 }] },
      { n: "Strawberry Matcha", s: [{ t: "Lata G 16 oz", p: 85 }] },
      { n: "Tropical Matcha", s: [{ t: "Lata G 16 oz", p: 85 }] }
    ]
  },
  {
    cat: "Greek Shakes",
    items: [
      { n: "Strawberry Shake", s: [{ t: "Lata G 16 oz", p: 135 }] },
      { n: "Banana Shake", s: [{ t: "Lata G 16 oz", p: 135 }] },
      { n: "Red Velvet Beet Shake", s: [{ t: "Lata G 16 oz", p: 135 }] },
      { n: "Blueberry Shake", s: [{ t: "Lata G 16 oz", p: 135 }] },
      { n: "Green Smoothie", s: [{ t: "Lata G 16 oz", p: 95 }] }
    ]
  },
  {
    cat: "Greek Cans",
    items: [
      { n: "Tropical Glow (Mango y granola)", s: [{ t: "Lata Ch 8 oz", p: 95 }] },
      { n: "Antioxidant Shot (Blueberries y chocolate)", s: [{ t: "Lata Ch 8 oz", p: 95 }] },
      { n: "Peanut Butter & Jelly (Fresas y crema de cacahuate)", s: [{ t: "Lata Ch 8 oz", p: 95 }] },
      { n: "Lemon Cheesecake (Limón y crumble de galletas)", s: [{ t: "Lata Ch 8 oz", p: 95 }] }
    ]
  },
  {
    cat: "Sandwiches",
    items: [
      { n: "Omega Bagel", s: [{ t: "pza", p: 230 }] },
      { n: "Turkey Trot Focaccia", s: [{ t: "pza", p: 220 }] },
      { n: "Slow Pace Focaccia", s: [{ t: "pza", p: 220 }] },
      { n: "Hot Ham Melt", s: [{ t: "pza", p: 240 }] },
      { n: "Gold Medal Focaccia", s: [{ t: "pza", p: 220 }] },
      { n: "Croissant Melt Margarita", s: [{ t: "pza", p: 230 }] }
    ]
  },
  {
    cat: "Wraps",
    items: [
      { n: "Turkey Wrap", s: [{ t: "pza", p: 145 }] },
      { n: "Italian Salad Wrap", s: [{ t: "pza", p: 145 }] }
    ]
  },
  {
    cat: "Toasts",
    items: [
      { n: "Muscle Up Toast", s: [{ t: "pza", p: 140 }] },
      { n: "Avocado Toast", s: [{ t: "pza", p: 130 }] },
      { n: "Hummus Toast", s: [{ t: "pza", p: 120 }] }
    ]
  },
  {
    cat: "Extras",
    items: [
      { n: "Shot de espresso extra", s: [{ t: "shot", p: 35 }] },
      { n: "Soft Serve extra", s: [{ t: "80 g", p: 35 }] },
      { n: "Cold Foam", s: [{ t: "100 ml", p: 25 }] },
      { n: "Leche vegetal", s: [{ t: "porción", p: 15 }] },
      { n: "Proteína", s: [{ t: "30 g", p: 50 }] },
      { n: "Colágeno", s: [{ t: "porción", p: 35 }] }
    ]
  },
  {
    cat: "Embotellados",
    items: [
      { n: "Agua funcional (sabores) Casa del Agua", s: [{ t: "355 ml", p: 55 }] },
      { n: "Agua natural Casa del Agua", s: [{ t: "750 ml", p: 85 }] },
      { n: "Agua con gas Casa del Agua", s: [{ t: "355 ml", p: 50 }] },
      { n: "Cerveza Ultra", s: [{ t: "botella", p: 60 }] }
    ]
  },
  {
    cat: "Eventos y coffee break",
    items: [
      { n: "Latte en lata", s: [{ t: "Grande 500 ml", p: 80 }, { t: "Pequeña 250 ml", p: 45 }] },
      { n: "Matcha Latte en lata", s: [{ t: "Grande 500 ml", p: 95 }, { t: "Pequeña 250 ml", p: 50 }] },
      { n: "Cold Brew en lata", s: [{ t: "Grande 500 ml", p: 65 }, { t: "Pequeña 250 ml", p: 40 }] },
      { n: "Greek Can (sabor por seleccionar)", s: [{ t: "Lata Ch 8 oz", p: 80 }] },
      { n: "Mini Concha", s: [{ t: "pza", p: 35 }] },
      { n: "Mini Croissant", s: [{ t: "pza", p: 35 }] },
      { n: "Mini Chocolatín", s: [{ t: "pza", p: 40 }] },
      { n: "Tapeo Avocado Toast", s: [{ t: "pza", p: 25 }] },
      { n: "Tapeo Hummus Toast", s: [{ t: "pza", p: 25 }] },
      { n: "Turkey Trot (evento)", s: [{ t: "pza", p: 110 }] },
      { n: "Slow Pace (evento)", s: [{ t: "pza", p: 110 }] },
      { n: "Wrap Italiano (evento)", s: [{ t: "pza", p: 72 }] },
      { n: "Trotakult", s: [{ t: "pza", p: 75 }] },
      { n: "Overnight Oats", s: [{ t: "pza", p: 75 }] },
      { n: "Garrafa de agua natural cítrica", s: [{ t: "garrafa", p: 50 }] }
    ]
  }
];

// Sugerencias rápidas para servicios especiales (nombre y precio de referencia).
window.TROTA_SERVICIOS = [
  { n: "Personal de apoyo", p: 500 },
  { n: "Servicio de mesero", p: 500 },
  { n: "Desechables", p: 300 },
  { n: "Envío / entrega", p: 0 },
  { n: "Branding de latas con logo", p: 0 }
];

// Condiciones sugeridas (se agregan con un toque; también se pueden escribir libres).
window.TROTA_CONDICIONES = [
  "Precios en pesos mexicanos.",
  "Vigencia del presupuesto: 15 días.",
  "Para confirmar se requiere un anticipo del 50 %; el resto se liquida antes de la entrega.",
  "Pago por transferencia o efectivo.",
  "Cancelaciones con menos de 48 horas de anticipación no son reembolsables.",
  "Si se confirma hoy mismo, brandeamos las latas con el logo sin costo.",
  "Cambios en cantidades hasta 72 horas antes del evento.",
  "La entrega incluye hielo y desechables; el servicio de personal se cotiza aparte."
];

// Variaciones rápidas de un producto del menú: factor sobre el precio.
window.TROTA_VARIACIONES = [
  { n: "1/2", f: 0.5 },
  { n: "Mini", f: 0.5 },
  { n: "Tapeo", f: 0.25 }
];
