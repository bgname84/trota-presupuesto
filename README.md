# Presupuestos Trota

App web sencilla para generar presupuestos de TROTA Run & Café en el formato de la cotización oficial (logo, tablas, nota de IVA y pie de página azul).

## Cómo funciona

1. **Entrar** con usuario y contraseña.
2. **Nuevo presupuesto**: cliente, fecha del evento, lugar de entrega.
3. **Agregar** productos del menú (con su precio) o un **producto o servicio especial** (p. ej. personal de apoyo).
   - Cada producto puede llevar una **variación** (1/2, mini, tapeo o texto libre). Las variaciones 1/2 y mini ponen el precio al 50 % y tapeo al 25 %; el precio siempre se puede corregir a mano.
   - Cada línea tiene **Editar** (nombre, tamaño, variación, cantidad, precio).
   - Los especiales se pueden **guardar en "Mis especiales"** para reutilizarlos en futuras cotizaciones (quedan en el navegador del dispositivo).
4. **Mostrar totales**: apagado, el presupuesto muestra solo el precio por unidad (como la cotización original). **Descuento general** en % (aplica solo a productos, no a servicios).
5. **Requiere factura**: agrega el 16 % de IVA. Si no se marca, el presupuesto indica que con factura se agrega el IVA.
6. **Condiciones**: anticipo, vigencia, cancelaciones, etc. Hay sugerencias de un toque y se pueden escribir libres. La nota del IVA siempre aparece como primera condición.
7. **Notas** libres (p. ej. "Pendiente para coordinar detalles de entrega").
8. **Revisar presupuesto** → **Aprobar** → **Compartir PDF** (WhatsApp, correo, etc.), **Descargar PDF** o **Guardar**.

Los presupuestos guardados quedan en el navegador del dispositivo donde se hicieron.

## Cambiar precios o productos

Edita `menu.js`. Cada producto tiene una o más presentaciones `{ t: "tamaño", p: precio }`.
En el mismo archivo están las sugerencias de servicios (`TROTA_SERVICIOS`), las condiciones sugeridas (`TROTA_CONDICIONES`) y las variaciones rápidas (`TROTA_VARIACIONES`).

## Archivos

- `index.html` — la app completa.
- `menu.js` — catálogo de precios.
- `assets.js` — logo y pie de página (base64).
- `jspdf.umd.min.js` y `jspdf.plugin.autotable.min.js` — librerías para generar el PDF.
