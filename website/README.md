# Página web comercial · Pinturas JM

Rama: `pagina-web`. El sitio está en `website/`; la plataforma operativa de `dist/` se conserva sin modificaciones.

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
- La vista previa publicada de esta web es un sitio independiente. No reemplaza la plataforma operativa y no se publica automáticamente al hacer push a GitHub.


## Efecto interactivo de pintura

Inspiración de interacción: [Lando Norris](https://landonorris.com/) y video de referencia aportado por el cliente. Implementación propia: no se copian código, retratos, cascos ni recursos de esa web.

La portada combina una base grafito con una capa de color recortada mediante un pincel orgánico Canvas 2D. El cursor deja una estela que se desvanece; los controles permiten explorar rojo, azul y cobre, ver toda la capa y volver al pincel. Son variaciones artísticas de la imagen conceptual, no simulaciones físicas ni fórmulas de pintura.

En dispositivos táctiles se activa explícitamente el pincel para dibujar sobre la imagen; al desactivarlo se recupera el desplazamiento normal. El botón de acabado completo también permite explorar sin dibujar. Los botones funcionan con teclado. Con preferencia de movimiento reducido se usa la vista estática seleccionable. El render limita resolución, se detiene al terminar la estela y se pausa cuando la portada deja de estar visible. Sin Canvas se conserva la imagen de portada.

Verificación: sintaxis JavaScript, trazo y desaparición visual en navegador, selección de acabado, retorno al pincel y composición a 390 px sin desbordamiento horizontal. La activación táctil requiere una comprobación adicional en un teléfono físico.


## Accesos al proyecto y cotización

La cabecera contiene dos accesos visibles en escritorio y móvil:

- **Entrar al prototipo:** abre el prototipo operativo existente en otra pestaña, en `https://pinturas-jm-operacion.karlozvx.chatgpt.site/`. Respeta las condiciones de acceso que tenga ese sitio.
- **Ver cotización:** abre un diálogo accesible con el estado «Documento pendiente». Puede cerrarse con el botón, Escape o clic fuera. No contiene importes, fechas de entrega ni un documento ficticio.

Cuando se entregue la cotización final se sustituirá el contenido pendiente de `#quote-dialog` por su presentación y el acceso al documento aprobado. No hay carga de documentos ni publicación automática desde el navegador.
