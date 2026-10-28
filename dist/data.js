// DEMO: identidad provisional, precios, promociones y contactos ficticios.
// Cambia este archivo para personalizar el negocio sin tocar los componentes.
export const business = {
  name: 'Miga & Fuego', tagline: 'Panadería · Pizzería',
  address: 'Av. del Horno 123, tu ciudad',
  phone: '+51 000 000 000',
  bakeryHours: 'Lun–dom · 7:00 a. m. a 8:00 p. m.',
  pizzaHours: 'Lun–dom · 6:00 p. m. a 10:00 p. m.',
  demo: true,
};
export const breads = [
  { name: 'Pan francés', description: 'Corteza crujiente, corazón suave. El de cada mañana.', price: 0.50, unit: 'unidad', image: 'frances', category: 'Panes', tag: 'Más vendido' },
  { name: 'Croissant de mantequilla', description: 'Capas doradas que se deshacen con el primer bocado.', price: 4.50, unit: 'unidad', image: 'croissant', category: 'Dulces', tag: 'Favorito' },
  { name: 'Pan dulce', description: 'Suave, esponjoso y con ese toque dulce de casa.', price: 2.50, unit: 'unidad', image: 'dulce', category: 'Dulces' },
  { name: 'Empanada de la casa', description: 'Masa doradita y un generoso relleno de pollo.', price: 5.00, unit: 'unidad', image: 'empanada', category: 'Salados' },
  { name: 'Pastel de chocolate', description: 'Bizcocho húmedo y chocolate para alegrar la tarde.', price: 8.00, unit: 'porción', image: 'pastel', category: 'Dulces' },
  { name: 'Pan artesanal', description: 'Masa de fermentación lenta, harina y mucha paciencia.', price: 12.00, unit: 'pieza', image: 'bread', category: 'Panes', tag: 'Recién horneado' },
];
export const pizzas = [
  { name: 'Americana', description: 'Mozzarella, jamón y nuestra salsa de tomate.', prices: [16, 27, 38], image: 'americana', tag: 'La de siempre' },
  { name: 'Hawaiana', description: 'Jamón, piña y mozzarella. Sí, nos encanta.', prices: [17, 29, 40], image: 'hawaiana' },
  { name: 'Pepperoni', description: 'Pepperoni, mozzarella y un toque de orégano.', prices: [18, 30, 42], image: 'pizza', tag: 'Favorita' },
  { name: 'Suprema', description: 'Jamón, pepperoni, pimiento, champiñón y aceitunas.', prices: [20, 33, 46], image: 'suprema' },
  { name: 'Especial de la casa', description: 'Pollo, champiñones, mozzarella y nuestra salsa especial.', prices: [21, 35, 49], image: 'especial', tag: 'De la casa' },
  { name: 'A tu manera', description: 'Una base artesanal y tus ingredientes favoritos.', prices: [19, 32, 45], image: 'personalizable' },
];
export const promotions = [
  { label: 'PARA COMPARTIR', name: 'Combo familiar', text: 'Pizza familiar americana + bebida de 1,5 L.', price: 44, note: 'Una mesa llena sabe mejor.', image: 'pizza' },
  { label: 'DESDE LAS 6:00 P. M.', name: 'Noche de pizza', text: 'Dos pizzas medianas: americana y pepperoni.', price: 49, note: 'La mejor excusa para quedarse un rato.', image: 'suprema' },
  { label: 'UN POCO DE TODO', name: 'Combo de la casa', text: 'Pizza mediana + pan al ajo + bebida de 1 L.', price: 39, note: 'Para los que quieren probarlo todo.', image: 'especial' },
];
export const gallery = [
  { image: 'bread', alt: 'Panes artesanales de corteza dorada', label: 'El primer aroma del día' },
  { image: 'oven', alt: 'Preparación de una pizza junto al horno', label: 'Donde empieza la magia' },
  { image: 'pizza', alt: 'Pizza de pepperoni recién preparada', label: 'Una más para compartir' },
  { image: 'hands', alt: 'Manos trabajando la masa sobre una mesa con harina', label: 'Hecho con nuestras manos' },
  { image: 'ingredients', alt: 'Tomates frescos en rama para preparar la salsa', label: 'Todo empieza con lo bueno' },
  { image: 'bakery', alt: 'Mostrador de una panadería cálida', label: 'Un lugar para volver' },
];
