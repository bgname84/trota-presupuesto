# Presupuestos Trota

App web sencilla para generar presupuestos de TROTA Run & Café en el formato de la cotización oficial (logo, tablas, nota de IVA y pie de página azul).

## Cómo funciona

1. **Entrar** con usuario y contraseña.
2. **Nuevo presupuesto**: cliente, fecha del evento, lugar de entrega.
3. **Agregar** productos del menú (con su precio) o un **servicio** (p. ej. personal de apoyo).
   - El menú se puede editar desde la app: **+ Nuevo** agrega un producto (categoría, nombre, presentaciones y precios) y el lápiz ✎ edita, restaura o quita uno existente. Estos cambios quedan guardados en el navegador del dispositivo.
   - Cada producto puede llevar una **variación** (1/2, mini, tapeo o texto libre). Las variaciones 1/2 y mini ponen el precio al 50 % y tapeo al 25 %; el precio siempre se puede corregir a mano.
   - Cada línea tiene **Editar** (nombre, tamaño, variación, cantidad, precio).
   - Los especiales se pueden **guardar en "Mis especiales"** para reutilizarlos en futuras cotizaciones (quedan en el navegador del dispositivo).
   - **Opciones**: al agregar, elige "Opción 1", "Opción 2"… o "Todas las opciones". El presupuesto muestra cada opción por separado, lo incluido en todas, los servicios y un total por opción.
4. **Mostrar totales**: apagado, el presupuesto muestra solo el precio por unidad (como la cotización original). **Descuento general** en % (aplica solo a productos, no a servicios).
5. **Requiere factura**: agrega el 16 % de IVA. Si no se marca, el presupuesto indica que con factura se agrega el IVA.
6. **Condiciones**: anticipo, vigencia, cancelaciones, etc. Hay sugerencias de un toque y se pueden escribir libres. La nota del IVA siempre aparece como primera condición.
7. **Notas** libres (p. ej. "Pendiente para coordinar detalles de entrega").
8. **Revisar presupuesto** → **Aprobar** → **Compartir PDF** (WhatsApp, correo, etc.), **Descargar PDF** o **Guardar**.

## Base de datos en línea

Presupuestos, "Mis especiales" y los cambios al menú se guardan en una hoja de Google ("Trota presupuestos (base de datos)" en el Drive del dueño) a través de un Google Apps Script publicado como aplicación web (código en `db/Code.gs`). La app la consulta al entrar y cada vez que vuelve al inicio; si no hay conexión, trabaja con la copia local y sube los cambios pendientes al reconectar. La URL de la aplicación web va en `DB.url` dentro de `index.html`.

## Cambiar precios o productos para todos los dispositivos

Los cambios al menú hechos desde la app se guardan en la base de datos en línea. El menú base está en `menu.js`. Cada producto tiene una o más presentaciones `{ t: "tamaño", p: precio }`.
En el mismo archivo están las sugerencias de servicios (`TROTA_SERVICIOS`), las condiciones sugeridas (`TROTA_CONDICIONES`) y las variaciones rápidas (`TROTA_VARIACIONES`).

## Archivos

- `index.html` — la app completa.
- `menu.js` — catálogo de precios.
- `assets.js` — logo y pie de página (base64).
- `jspdf.umd.min.js` y `jspdf.plugin.autotable.min.js` — librerías para generar el PDF.
