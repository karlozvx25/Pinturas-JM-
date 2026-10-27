# Página web comercial · Pinturas JM

Rama de trabajo: `pagina-web`; rama de publicación: `main`. El sitio está en `website/`; la plataforma operativa se conserva en `dist/`.

## Iniciar

```bash
python3 -m http.server 8775 --directory website
```

Abrir `http://localhost:8775/`. También: `npm run web:start` desde la raíz. No hay compilación, instalación de dependencias ni conexión al ERP.

## Dirección creativa

- Portada de alto impacto, tipografía editorial y una imagen conceptual propia.
- Recorrido: universo de marca → líneas de producto → exploración de color → red de atención → contacto.
- Menú de pantalla completa, secciones reveladas al desplazarse, líneas desplegables y pieza digital con color/luz ajustables.
- Diseño adaptable a móvil y escritorio, navegación de teclado, diálogos nativos y reducción de movimiento según preferencia del dispositivo.
- Las imágenes, código, composición, textos y gráficos de Otherlife no fueron copiados. Su lenguaje de dirección creativa y presentación inmersiva se usa como referencia.

## Referencias y contenido

1. [Facebook de Pinturas JM](https://www.facebook.com/pinturasjmsadecv/?locale=es_LA), consultado en navegador el 26 de octubre de 2026. Se verificaron nombre, enfoque comercial, correo `pedidosycotizaciones@pinturasjm.mx`, teléfono `55 1040 8450` y domicilio publicado en Alfredo Zárate Albarrán s/n, Santa María de las Rosas. El contexto del proyecto ubica la operación en Toluca.
2. [Otherlife](https://www.otherlife.xyz/), revisado como referencia visual. Se tomó la idea de presencia editorial, imágenes protagonistas y navegación inmersiva, con una composición original para JM.
3. Contexto aportado por el cliente en el proyecto: 11 sucursales y un centro de distribución; pintura automotriz, preparación, igualación y complementos. No se publican saldos, procesos internos ni grabaciones en este sitio comercial.

Los datos de contacto son los observados en Facebook en esa revisión; deben confirmarse antes del lanzamiento comercial definitivo. El mapa enlaza una búsqueda por domicilio, no una geolocalización exacta verificada. No se inventan horarios, precios, promociones, certificaciones, testimonios ni domicilios de las once sucursales. Se evita afirmar una relación de distribución autorizada de marcas.

## Contacto: comportamiento real

Los botones abren un formulario de preparación de consulta. Se valida nombre y descripción; la pantalla crea un enlace `mailto:` para que el visitante revise y envíe el mensaje en su propia aplicación de correo.

- No hay endpoint de envío ni almacenamiento de datos del formulario.
- El sitio no afirma que el mensaje ya fue enviado.
- Los enlaces de teléfono, correo y Facebook son accesos directos; no disparan comunicaciones automáticamente.
- Para un formulario con envío real se requiere backend, configuración de correo, controles de abuso y aviso de privacidad aprobado.

## Color: límites

La pieza escultórica, nombres y colores son exploraciones artísticas RGB. No son tonos de catálogo homologados, muestras físicas ni fórmulas. Los acabados y la igualación reales requieren su sistema, materiales y validación en muestra.

## Imagen principal

`assets/hero-color.png` se generó con la herramienta integrada **ImageGen** para este proyecto. Es una pieza conceptual, no una fotografía de un trabajo del cliente ni de un producto real. El prompt final completo está en [`assets/hero-prompt.txt`](assets/hero-prompt.txt).

El identificador tipográfico y el favicon son una propuesta para esta web; el archivo maestro oficial de identidad queda pendiente de recibir y homologar. No se presentan como un rediseño de marca aprobado.

## Archivos

- `index.html`: contenido, secciones, enlaces y diálogos.
- `styles.css`: sistema visual, adaptación y movimiento reducido.
- `app.js`: menú, acordeones, exploración de color y preparación de consulta.
- `assets/`: imagen conceptual, prompt y favicon SVG.

## Verificación y publicación

- `npm run web:check`: sintaxis JavaScript.
- Probar menú con teclado/Escape, líneas desplegables, cambio de color/luz, consulta preparada sin envío, enlaces internos y adaptación móvil.
- GitHub Pages publica únicamente `website/` mediante `.github/workflows/pages.yml` al integrar cambios de la web en `main`. También permite ejecución manual desde Actions. La propuesta y el prototipo mantienen sus enlaces y permisos independientes.
- URL de GitHub Pages: https://karlozvx25.github.io/Pinturas-JM-/
- Flujo: editar `pagina-web`, verificar con `npm run web:check`, integrar en `main` y revisar el despliegue en Actions. El merge hacia `main` no actualiza por sí solo otras ramas; para mantener `pagina-web` alineada, incorporar después `main` sin sobrescribir historial.
- El artefacto contiene sólo los archivos comerciales de `website/`, sin fuentes internas, documentos del cliente ni la cotización financiera. El botón de cotización conserva su enlace al Site de propuesta.


## Efecto interactivo de pintura

Inspiración de interacción: [Lando Norris](https://landonorris.com/) y video de referencia aportado por el cliente. Implementación propia: no se copian código, retratos, cascos ni recursos de esa web.

La portada combina una base grafito con una capa de color recortada mediante un pincel orgánico Canvas 2D. El cursor deja una estela que se desvanece; los controles permiten explorar rojo, azul y cobre, ver toda la capa y volver al pincel. Son variaciones artísticas de la imagen conceptual, no simulaciones físicas ni fórmulas de pintura.

En dispositivos táctiles se activa explícitamente el pincel para dibujar sobre la imagen; al desactivarlo se recupera el desplazamiento normal. El botón de acabado completo también permite explorar sin dibujar. Los botones funcionan con teclado. Con preferencia de movimiento reducido se usa la vista estática seleccionable. El render limita resolución, se detiene al terminar la estela y se pausa cuando la portada deja de estar visible. Sin Canvas se conserva la imagen de portada.

Verificación: sintaxis JavaScript, trazo y desaparición visual en navegador, selección de acabado, retorno al pincel y composición a 390 px sin desbordamiento horizontal. La activación táctil requiere una comprobación adicional en un teléfono físico.


## Accesos al proyecto y cotización

La cabecera contiene dos accesos visibles en escritorio y móvil:

- **Entrar al prototipo:** abre el prototipo operativo existente en otra pestaña, en `https://pinturas-jm-operacion.karlozvx.chatgpt.site/`. Respeta las condiciones de acceso que tenga ese sitio.
- **Ver cotización:** abre directamente la propuesta interactiva de SyborX en una pestaña nueva, sin una ventana intermedia. Incluye la actualización de beneficios SaaS y conserva los permisos propios del sitio de la propuesta. El código de la web comercial no contiene importes ni el análisis financiero interno.

La presentación se publica como un Site separado: `https://syborx-propuesta-pinturas-jm.karlozvx.chatgpt.site/`. No hay carga de documentos ni publicación automática desde el navegador.


## Pedidos en línea y carrito

La nueva sección **02 / Pedir en línea** está entre Universo JM y Nuestras líneas. La navegación y las secciones posteriores se renumeraron. El carrito también tiene un acceso permanente en la cabecera.

### Catálogo de demostración

Incluye **64 productos genéricos en ocho categorías**, con presentaciones ilustrativas. No constituye un listado de productos confirmados de JM. Todos los códigos llevan el prefijo `DEMO-`; las ilustraciones SVG son originales y conceptuales, no fotografías de empaques ni marcas reales.

| Categoría | Ejemplos | Presentaciones de ejemplo |
| --- | --- | --- |
| Pintura automotriz | Bases sólidas, metálicas, perladas; esmaltes; transparentes | 250 ml, 1 L, galón de 3.785 L |
| Pintura arquitectónica | Vinílica, acrílica, satinada, impermeabilizante | 1 L, galón, cubeta de 19 L |
| Madera e industrial | Barnices, laca, tintas, anticorrosivo | 1 L y galón |
| Preparación | Masillas, plastes, fondos y primers | Peso o volumen, según producto |
| Solventes y auxiliares | Thinners, reductores y limpieza | 1 L, galón y bidón de 5 L |
| Brochas y rodillos | Cerdas naturales, sintéticas; felpas; minirrodillos | Medidas en pulgadas y paquetes |
| Accesorios y abrasivos | Lijas, discos, cintas, vasos y coladores | Granos, medidas, piezas y paquetes |
| Limpieza y protección | Estopas, trapos, paños, guantes y protección | Peso, piezas, pares y rollos |

### Flujo de compra del prototipo

1. Buscar por nombre, categoría, código o presentación. La búsqueda ignora acentos. Filtrar por categoría y ordenar por nombre.
2. Elegir presentación y agregar. Se muestran 12 tarjetas inicialmente y se cargan 12 adicionales por acción.
3. Abrir carrito, modificar cantidades de 1 a 999 o eliminar productos. Cada combinación de producto y presentación tiene su propia partida. Agregar la misma combinación incrementa su cantidad.
4. Capturar nombre, contacto, modalidad de recolección o entrega, zona y notas opcionales.
5. Preparar la solicitud y revisar el texto. Abrir el correo con el pedido o copiarlo para compartirlo manualmente. En pedidos extensos el correo incluye sólo el asunto y se indica copiar el detalle.

**Alcance actual:** el carrito es funcional en el navegador, usa `localStorage` con validación de identificadores, presentaciones y cantidades. Si el almacenamiento está bloqueado funciona durante la visita. Los datos personales del formulario no se guardan en ese almacenamiento. Cambiar el carrito invalida la solicitud preparada para evitar enviar un detalle anterior.

**Precios y operación:** se muestra «Por cotizar». No hay precios inventados, cobros, reservas de stock, folios reales, integración de inventarios ni envío automático. La solicitud queda pendiente de revisión por JM y no confirma una compra. Los selectores de entrega no prometen cobertura ni una sucursal específica.

### Conexión pendiente con backend

| Área | Decisión necesaria para producción |
| --- | --- |
| Catálogo | Cargar SKUs oficiales, fotos, marcas, unidades y presentaciones válidas. Sustituir los datos de `shop.js`. |
| Precio | Definir moneda, impuestos, listas por cliente, descuentos y vigencia. Recalcular siempre en servidor. |
| Existencias | Consultar disponibilidad por sucursal/CEDIS y decidir reservas, caducidad y pedidos parciales. |
| Pedido | Crear folio persistente, validar cantidades y presentaciones en servidor y evitar duplicados por reintentos. |
| Entrega | Confirmar sucursales, cobertura, costos, horarios y productos con restricciones de traslado. |
| Pago | Seleccionar proveedor y definir cuándo se cobra. El frontend no recibe datos bancarios actualmente. |
| Comunicación | Elegir canal de confirmación y consentimiento; reemplazar correo preparado por un flujo transaccional validado. |
| Privacidad | Definir aviso de privacidad y conservación de datos antes de registrar clientes y pedidos. |

### Verificación realizada

Sintaxis de ambos archivos JavaScript, búsqueda, filtros, orden, paginación a 24 productos, selección de galón, acumulación de una presentación repetida, cantidades mediante botones y captura directa (incluye límites 1/999), eliminación y estado vacío, persistencia tras recargar, preparación de solicitud con entrega y correo codificado sin envío, y vista móvil de 390 px sin desbordamiento horizontal. Revisión de consola sin errores durante las pruebas.


## Legibilidad

Revisión del 27 oct 2026: Arial en texto e interfaz; mínimo de 11 px para etiquetas, controles y texto auxiliar en todos los tamaños de pantalla. Se conservan títulos y texto principal de mayor tamaño.
