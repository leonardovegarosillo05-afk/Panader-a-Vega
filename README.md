# Miga & Fuego

Demo visual responsive de una panadería y pizzería. Marca provisional; productos, precios, promociones, historia, dirección y horarios ilustrativos. No incluye servicios de pedidos, compras, cuentas, pagos ni backend.

## Ver la página

Sirve la carpeta `dist` con cualquier servidor estático. Por ejemplo, si tienes Python:

```sh
python -m http.server 4173 --directory dist
```

Abre `http://localhost:4173`. Los módulos JavaScript necesitan un servidor HTTP; no abras `index.html` mediante `file://`.

## Organización

- `dist/index.html`: estructura y textos de las secciones.
- `dist/data.js`: negocio, productos, categorías, precios por tamaño, promociones y galería. Todos los datos comerciales son demostrativos.
- `dist/app.js`: componentes de catálogo y galería, filtros, tamaños, navegación y ventanas accesibles.
- `dist/styles.css`: diseño responsive, animaciones y soporte para movimiento reducido.
- `dist/assets/`: fotografías locales optimizadas y respaldo gráfico.
- `dist/credits.html`: procedencia de las fotografías.

Se eligió HTML, CSS y JavaScript modular por tratarse de una demo estática: no requiere instalación, compilación ni dependencias de terceros. Los datos y los componentes están separados para facilitar su posterior migración a React/TypeScript.

## Personalización

1. Cambia la marca en `index.html`, `data.js`, favicon y metadatos.
2. Edita productos, precios, promociones y contactos en `data.js`.
3. Reemplaza las fotografías conservando sus nombres, o modifica los campos `image`. Usa JPEG, con dimensiones adecuadas y encuadres centrales.
4. Para conectar redes reales, sustituye los botones de ejemplo por enlaces de contacto verificados.
5. Reemplaza el mapa ilustrativo cuando se conozca la ubicación real.

La selección de tamaño solo actualiza el precio mostrado. Los combos y contactos abren información sobre la demo. No se envían datos ni se crean pedidos.

## Accesibilidad y rendimiento

Enlace para saltar al contenido, navegación por teclado, estados `aria-pressed` y `aria-expanded`, diálogos nativos con Escape y devolución de foco, precios anunciados, respeto a `prefers-reduced-motion`, imágenes diferidas salvo la portada y dimensiones reservadas para evitar saltos de diseño.

Las fotografías son de referencia y no representan necesariamente el producto ni el local real. Antes de un lanzamiento comercial, revisar ingredientes, alérgenos, precios, condiciones de promociones, contactos y derechos de las imágenes propias.

## Repositorio

Demo preparada para el proyecto Panadería Vega. «Miga & Fuego» es una identidad visual provisional que puede sustituirse por la marca definitiva.
