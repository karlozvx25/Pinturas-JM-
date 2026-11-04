# Propuesta de desarrollo tecnológico para Pinturas JM

SyborX · Revisión comercial del 3 de noviembre de 2026

Dirigido a la Dirección de Pinturas JM S.A. de C.V.

## 1. Objetivo

Desarrollar una primera fase de control de catálogo, inventarios y traslados para un CEDIS y 11 sucursales. Base provisional: 15 puestos simultáneos, uno por sucursal y cuatro en CEDIS, sujeta a medición durante el levantamiento. El propósito es controlar referencias, existencias y entregas con escaneo, permisos por sede y trazabilidad.

Esta revisión deja una sola propuesta de $1,300,000 + IVA y retira la alternativa de desarrollo completo. Los módulos futuros se muestran como plan de evolución; no están incluidos por aparecer en el catálogo, diagramas o prototipo.

## 2. Mapa de módulos y alcance contratado

El catálogo siguiente describe los módulos completos de la visión del proyecto. Únicamente las funciones expresamente incluidas o parciales de la sección 2.1 forman parte de la fase inicial; el resto queda pendiente para contratación posterior.

| Módulo | Qué se entregará |
| --- | --- |
| **Catálogo maestro y códigos de barras** | Catálogo central de productos, marcas, líneas, presentaciones y unidades; equivalencias entre código interno y proveedor; altas y actualizaciones masivas, precios por tipo de cliente y control de productos descontinuados. Generación de etiquetas internas y lectura de códigos con equipos compatibles. |
| **Compras y recepción en CEDIS** | Sugeridos y órdenes de compra, pendientes de surtido y recepción contra lo solicitado. Registro de bultos y validación posterior de contenido; diferencias, cuarentena, lotes, caducidades y seguimiento de garantías con evidencia. Registro de obsequios de proveedor. |
| **Inventarios y producción JM** | Existencias por CEDIS y sucursal; disponible, reservado y en tránsito; kardex y conteos cíclicos. Órdenes de fraccionamiento y reenvasado con consumo de materia prima, envases y tapas, lotes derivados, rendimiento y merma. Las conversiones conservarán la identidad del producto y color. |
| **Reabastecimiento y distribución** | Sugeridos por mínimos, máximos y rotación; generación de traspasos desde el CEDIS, instrucciones entre sucursales y excepciones autorizadas. Escaneo en puntos de control, recepción ciega y parcial, registro de faltantes y resolución auditada. La sucursal acreditará únicamente lo recibido físicamente. |
| **Laboratorio de igualación** | Registro de fórmulas por componentes y gramajes, línea, presentación, volumen, responsable y ticket. Historial y versiones para recompra, fotografías de muestras y control de consumo de tintas y perlas. Las imágenes y colores de pantalla serán referencias visuales; no sustituyen la formulación física ni una muestra validada. |
| **Kits técnicos y complementos** | Reglas por producto y presentación para catalizadores, solventes, envases y complementos. Validación de compatibilidad, alternativas y autorizaciones; descuento por componente y registro del costo de insumos incluidos sin cargo. Reglas basadas en fichas técnicas aprobadas por JM. |
| **Punto de venta y mayoreo** | Venta asistida por escaneo o búsqueda, listas de precio, kits, igualados y formas de pago; cambios y devoluciones con autorización. Pedidos y surtido para clientes de mayoreo del CEDIS. Continuidad de venta ante caídas de red con cola de sincronización y prevención de duplicados. |
| **Cortes y control de crédito** | Pre-cierre por forma de pago, revisión de diferencias, registro de recolección de efectivo y depósito; caja chica y retiros autorizados. Saldos comerciales de clientes, límites, vencimientos, aplicación de pagos y desbloqueos autorizados. Son controles operativos, separados del módulo contable excluido. |
| **Facturación electrónica** | Integración con un PAC seleccionado para facturación individual y global, complementos de pago, notas de crédito y cancelaciones. Flujos de traslado y Carta Porte aplicables a la operación que se documenten en la definición fiscal. Timbres y servicios del PAC se contratan por separado. |
| **Dirección e inteligencia operativa** | Tableros de inventario, ventas, cartera, diferencias y productividad; alertas con responsable. Asistencia contextual sobre información y documentos autorizados, y sugerencias explicables de reabasto y revisión de anomalías. Las decisiones sensibles conservarán autorización humana. |
| **Diseño web, portal y pedidos** | Diseño visual y de experiencia de usuario de la página web de Pinturas JM, alineado con su identidad y adaptable a computadora, tableta y móvil. La web se vinculará con el portal del sistema desarrollado mediante un acceso autenticado para personal autorizado, con vistas según rol y sucursal. Incluirá catálogo conectado, carrito y registro de solicitudes de pedido para seguimiento por JM. Los precios y la disponibilidad procederán de la plataforma. La recepción de un pedido no confirmará automáticamente pago, reserva o entrega. |
| **Atención y seguimiento comercial** | Registro de solicitudes de sucursales y clientes clave, asignación de responsable, estados e historial. Incluye captura y seguimiento dentro de la plataforma; canales de telefonía y mensajería externos quedan fuera de esta versión. |
| **Seguridad y trazabilidad** | Acceso por rol y sucursal, autorizaciones, bitácora de operaciones sensibles y configuración de respaldos. Ajustes de inventario, precios, cancelaciones y excepciones quedarán registrados con usuario y motivo. |

### 2.1. Qué se entrega en la fase inicial · Primera fase operativa

La propuesta vigente es una primera fase acotada para controlar inventario y traslados de un CEDIS y 11 sucursales, con piloto inicial en el CEDIS y una sucursal y despliegue posterior de las funciones aceptadas a las diez restantes.

| Área | Incluido en la primera fase de $1,300,000 + IVA | Se reserva para fases posteriores |
| --- | --- | --- |
| Catálogo y códigos | Maestro de productos, presentaciones y unidades; equivalencias proveedor/SKU; etiquetas internas y lectura con equipos compatibles. Carga inicial acordada de hasta unas 5,000 referencias. | Imágenes y catálogo de comercio electrónico, reglas comerciales avanzadas. |
| Recepción y existencias | Captura de recepciones con referencia documental del proveedor, validación por escaneo, cantidades, diferencias, lotes cuando aplique, disponible/reservado/tránsito, kardex y conteos con ajustes autorizados. | Sugeridos de compra, autorización y gestión completa de órdenes de compra, garantías de proveedor y obsequios. |
| Solicitudes y traslados | Solicitud manual por sucursal, autorización central, reserva, picking y etiquetas, despacho, seguimiento por estados, recepción ciega y parcial, incidencias y resolución auditada. | Reabastecimiento automático, optimización de rutas y GPS/telemetría. |
| Control por usuario | Roles de tienda, almacén, central y supervisión; alcance por sucursal, bitácora y resumen básico de pendientes, existencias y diferencias. | Analítica avanzada, tableros gerenciales extensos y asistentes de IA. |
| Saldos durante la transición | Carga inicial validada y registro manual controlado o importación por plantilla de salidas por ventas/consumos; validación para evitar duplicados por referencia. Se acuerda un único mecanismo por flujo. | Integración automática o permanente con SAE/POS y sincronización bidireccional. |
| Puesta en marcha | Diseño UX de esta fase, backend de sus flujos, pruebas, migración inicial acordada, piloto, capacitación por rol, manuales y despliegue de las funciones incluidas; web institucional de cortesía. | Catálogo conectado, carrito y pedidos web; contact center y canales externos. La web institucional de cortesía sí está incluida. |
| Procesos especializados | Se conservan las referencias de producto/color en los movimientos incluidos. | Laboratorio y fórmulas, consumo por pigmento, kits, apertura/fraccionamiento y producción/reenvase, POS y mayoreo completos, cortes, crédito, facturación y PAC. |

**Condición de operación de la fase inicial:** la venta, el igualado, la producción y la facturación siguen en el sistema o procedimiento actual. Antes del piloto se acordará cómo registrar sus efectos en inventario, quién los concilia y cuál es la fuente oficial por flujo. No se prometerán existencias al día si no se registran oportunamente las salidas; no se incluyen conectores automáticos al sistema anterior. Si el mecanismo manual o por plantilla no es viable, se deberá redefinir la transición antes de la aceptación, sin presumir una integración incluida.

El canal de catálogo, carrito y pedidos conectados es la primera ampliación recomendada para expandir el alcance comercial. Su contratación es opcional. Al concluir la primera fase, se revisarán las prioridades del cliente y se cotizarán por separado únicamente los módulos adicionales que desee contratar. No hay obligación de contratar las fases pendientes. El precio de la primera fase no garantiza que completar el sistema después cueste únicamente la diferencia frente a ofertas anteriores. Se buscará reutilizar la base construida; no se volverán a cobrar componentes ya entregados sin una ampliación o cambio expresamente acordado.

La primera etapa se entregará completa y operativa para los flujos contratados de inventario y traslados. Su aceptación no se condiciona a comprar módulos posteriores. Los controles obligatorios de lectura, autorización y recepción buscan reducir errores, pérdidas y oportunidades de sustracción; sus resultados se medirán, sin prometer porcentajes no comprobados.

### Definiciones técnicas que se cerrarán en el levantamiento

Se documentarán los volúmenes reales de las presentaciones, unidades de pigmentos, reglas de kits, catálogo de etiquetas, política de crédito sin conexión, equipos, responsables y ventanas de recepción. La captura manual validada será el respaldo para procesos sin integración de hardware.

La operación offline se refiere al POS y a los flujos expresamente definidos. La autorización de tarjeta o transferencia depende de los servicios bancarios; el timbrado fiscal se realizará con conexión. Se establecerán límites de autonomía y políticas de conflicto antes de las pruebas de aceptación.

### 2.2. Web institucional de cortesía y pedidos opcionales

La web institucional se entrega sin cargo adicional de desarrollo: diseño adaptable, presentación de Pinturas JM, líneas de producto, contacto y acceso al portal contratado. No incluye dominio, correo, contenidos ilimitados ni campañas. El alojamiento de la plataforma se rige por la promoción de la sección 8; cualquier hospedaje externo independiente de la web se definirá por separado.

La web se entrega sin comercio electrónico productivo. Catálogo conectado, carrito y solicitudes de pedido requieren contratar el adicional de la sección 4.1. El carrito ilustrativo del prototipo no es una integración productiva incluida en la fase inicial. La cortesía no tiene importe canjeable ni reduce el precio si no se utiliza.

## 3. Implementación de la primera fase

| Etapa | Entrega propuesta | Ventana preliminar |
| --- | --- | --- |
| Levantamiento y diseño | Datos, roles, procesos de inventario, mecanismo de transición y piloto UX aprobado. | Semanas 1 a 4 |
| Base operativa | Catálogo, códigos, recepción, saldos, permisos y carga inicial acordada. | Semanas 5 a 12 |
| Movimientos y control | Solicitudes manuales, reserva, picking, despacho, recepción ciega/parcial, conteos y bitácora. | Semanas 10 a 18 |
| Piloto y conciliación | CEDIS y una sucursal; pruebas de escaneo, parciales y conciliación con el sistema actual. | Semanas 17 a 21 |
| Despliegue y entrega | Capacitación, extensión de funciones aceptadas a diez sucursales restantes y documentación. | Semanas 21 a 24 |

Plazo preliminar: 20 a 24 semanas más 30 días de estabilización. Las etapas se traslapan y las fechas se formalizan según datos, usuarios y transición. No se incluye operación offline. Se entregan backend de los flujos contratados, manuales, repositorio y configuración de despliegue; la cesión del desarrollo específico se formaliza en contrato al liquidar, respetando licencias de terceros.

## 4. Inversión de la fase inicial

Emisión: 3 de noviembre de 2026. Vigencia: 30 días naturales desde la emisión. Esta revisión sustituye las alternativas y promociones anteriores. Importes en MXN; IVA calculado al 16%.

| Concepto | Antes de IVA | IVA | Total con IVA |
| --- | ---: | ---: | ---: |
| Desarrollo de primera fase | $1,300,000 | $208,000 | $1,508,000 |
| Anticipo del 30% | $390,000 | $62,400 | $452,400 |
| Saldo en seis mensualidades | $910,000 | $145,600 | $1,055,600 |
| Un pago anual de mantenimiento | $180,000 | $28,800 | $208,800 |
| Alternativa de mantenimiento de dos pagos semestrales por año, cada pago | $90,000 | $14,400 | $104,400 |

Mantenimiento al concluir la garantía de 90 días, con hasta 15 horas por mes no acumulables. No se ofrece cobro mensual de mantenimiento. El alojamiento promocional sólo aplica con la anualidad de mantenimiento pagada por adelantado; con pago semestral se define y cotiza la infraestructura aparte.

### 4.1. Adicional opcional · Catálogo, carrito y pedidos conectados

**Precio propuesto: $240,000 MXN + $38,400 de IVA = $278,400 MXN con IVA.** Se contrata por separado y no está incluido en los $1,300,000 + IVA de la primera fase. Es una estimación comercial de SyborX para el alcance siguiente, sujeta a validación técnica y anexo; no es una tarifa de mercado ni una funcionalidad ya implementada.

| Incluye | Límite del adicional |
| --- | --- |
| Catálogo comercial | Publicación de productos, presentaciones, precios y disponibilidad desde los datos de la plataforma contratada; búsqueda y filtros. |
| Carrito y solicitud | Cantidades y presentaciones, validaciones en servidor, datos de contacto y modalidad de entrega/recolección. |
| Gestión de pedidos | Folio persistente, estados e historial, consulta y seguimiento por personal autorizado; prevención de solicitudes duplicadas por reintentos. |
| Conexión con la fase inicial | APIs necesarias para consultar el catálogo y registrar solicitudes sin exigir contratar el POS completo. Reglas de precios y disponibilidad se acuerdan previamente. |
| Entrega | Diseño del flujo UX, pruebas de conexión y permisos, puesta en marcha y capacitación acordadas. |

**No incluye pagos en línea ni pasarela**, comisiones bancarias, facturación/PAC, autorización automática de crédito, fletes o logística de última milla, reservas automáticas de stock, integración con marketplaces ni nuevos conectores a SAE. Un pedido recibido no confirma pago, existencia reservada o entrega. Requiere la fase inicial operativa, datos autorizados y reglas comerciales aprobadas. Calendario, pagos y aceptación se cotizarán/formalizarán antes del inicio; no se activa automáticamente al terminar la fase inicial. Se revisará por escrito el mantenimiento al ampliar el alcance, sin aumentos automáticos.

## 5. Anticipo y seis mensualidades

D es el día de recepción del anticipo. La primera mensualidad vence en D + 30 días naturales; las siguientes en el día calendario que se acuerde cada mes, o su último día cuando no exista el día de vencimiento. Sin intereses adicionales por el diferimiento.

| Pago | Antes de IVA |
| --- | ---: |
| Anticipo al formalizar | $390,000.00 |
| Cinco mensualidades ordinarias | $151,666.67 cada una |
| Sexta mensualidad ajustada | $151,666.65 |
| Total de desarrollo | $1,300,000.00 |

Cada pago lleva IVA; las cinco mensualidades ordinarias son $175,933.34 con IVA y la última $175,933.30, conciliando redondeos para totalizar el saldo pactado de $1,055,600. El calendario exacto se anexa al contrato. Las mensualidades son vencimientos de pago; la aceptación de entregables se revisa por criterios conjuntos, sin aceptación por silencio. Tratamiento de retrasos y suspensiones se acordará por escrito, sin penalizaciones automáticas incorporadas aquí.

## 6. Exclusiones expresas

### Recursos Humanos

No se incluyen portal del empleado, vacaciones, permisos, préstamos, asistencia, relojes checadores, comisiones laborales, expedientes, incidencias, nómina ni CFDI de nómina.

### Contabilidad

No se incluyen contabilidad general o avanzada, pólizas y su exportación a Aspel COI, integración contable con COI u otro sistema, cuentas por pagar avanzadas y cotejo triple, conciliación bancaria automatizada, centros de costo, estados financieros contables, cierre mensual contable ni declaraciones fiscales.

Los controles operativos de inventario incluidos no sustituyen la contabilidad del cliente. Cortes, crédito y facturación permanecen pendientes para otra fase.

### Otros conceptos no incluidos

- Compra e instalación de computadoras, lectores, impresoras, básculas, cámaras, terminales, redes, cableado, racks, jaulas o sellos físicos. El software de control y etiquetado sí forma parte del alcance señalado.
- Integración directa con dosificadoras, mezcladoras, espectrofotómetros, básculas o terminales bancarias. Se cotizará después de verificar marca, modelo, protocolo y acceso del fabricante.
- Pasarela y cobro en línea, comisiones bancarias, aplicaciones móviles nativas, telefonía de contact center, WhatsApp u otros conectores externos y campañas de marketing.
- Implementación completa de ubicaciones por rack/pasillo, auditoría externa presencial permanente y servicios de asesoría fiscal, contable o laboral.
- Operación paralela o integración permanente con Aspel SAE después de la migración, salvo el periodo de transición expresamente definido.
- Compra y operación de servidores propios, redes, guardias y alojamiento independiente no incluidos. Excepción promocional: SyborX absorbe el alojamiento de la plataforma durante la anualidad de mantenimiento anticipada y vigente, conforme a la sección 8.1.
- Dominios, certificados de pago cuando apliquen, PAC/timbres, licencias, APIs y consumo de servicios de inteligencia artificial de terceros.

## 7. Condiciones de trabajo y aceptación

El dimensionamiento base contempla un CEDIS, 11 sucursales y aproximadamente 5,000 referencias. Antes de formalizar el contrato se confirmarán los 15 puestos provisionales, usuarios concurrentes, equipos, red y sistemas de origen; cualquier diferencia se resolverá expresamente en el anexo de alcance.

Pinturas JM designará un responsable con disponibilidad aproximada de ocho horas semanales y procurará revisar entregables en cinco días hábiles. Proporcionará acceso autorizado a datos y equipos, fichas técnicas, reglas de negocio y personal para validar los procesos.

SyborX proporcionará plantillas y herramientas de carga y ejecutará la migración del catálogo, clientes, proveedores, saldos e inventario inicial acordados. Pinturas JM validará y depurará la información y realizará el conteo físico de apertura con sus responsables; la limpieza manual ilimitada de históricos no está incluida.

El piloto comprobará recepción parcial sin inventario fantasma, lectura por código, reservas y tránsito, conciliación de salidas y permisos por sede. Fórmulas, kits, POS, cortes y facturación no forman parte de esta fase. Las pruebas usarán datos y equipos autorizados por el cliente.

## 8. Garantía mantenimiento y promoción de nube

Incluye 30 días de estabilización tras despliegue y 90 días de garantía por defectos del alcance aceptado, desde aceptación final. Los defectos cubiertos se atienden sin cargo. El mantenimiento inicia al concluir la garantía, no durante el desarrollo ni por el inicio de mensualidades del saldo.

| Modalidad de mantenimiento | Antes de IVA | IVA | Total con IVA |
| --- | ---: | ---: | ---: |
| Un pago anual anticipado | $180,000 | $28,800 | $208,800 |
| Dos pagos semestrales anticipados por año, cada pago | $90,000 | $14,400 | $104,400 |

Hasta 15 horas por mes, no acumulables. Pagar el año no permite concentrar todas las horas en un mes. Incluye diagnóstico, soporte funcional y ajustes menores a funciones entregadas; nuevos módulos, excedentes y trabajos extraordinarios se cotizan con aprobación previa. No hay cargo por sucursal ni descuento adicional por periodicidad.

Primera respuesta crítica objetivo: cuatro horas hábiles en el horario acordado. No es resolución garantizada ni guardia 24/7. Un SLA de disponibilidad, atención continua, recuperación avanzada o segundo sitio debe diseñarse y contratarse expresamente. La operación física de las sucursales sigue dependiendo de su energía, internet, equipos y usuarios.

### 8.1. Alojamiento promocional con mantenimiento anual

Por promoción, SyborX absorbe el alojamiento en nube de la plataforma contratada durante cada anualidad de mantenimiento pagada por adelantado y vigente. No exige comprar un servidor central local para esa plataforma. La promoción no aplica automáticamente al pago semestral, para el cual se definirá servidor propio o cotización de nube independiente.

Para entregar el alcance contratado no se exigirá comprar la segunda etapa. Ampliaciones, excedentes y servicios extraordinarios requieren cotización y autorización previa; no se incorporan cargos automáticos por decisiones internas de implementación. Antes de formalizar se describirán proveedor/región, capacidad, almacenamiento, respaldo, retención, accesos, administración, recuperación y tratamiento de excedentes. No se promete uso ilimitado ni cobertura humana 24/7. El ambiente durante desarrollo, estabilización y garantía debe acordarse por escrito antes de iniciar, sin presumir costos adicionales ni alojamiento gratuito fuera del periodo pactado.

Se excluyen de este beneficio equipos locales, internet, energía, dominio, correo, PAC/timbres, IA, mensajería, pasarelas y otros consumos externos. En renovación, cambio de modalidad o terminación se acordarán continuidad, exportación de datos y migración. Los nuevos módulos y servicios extraordinarios requieren anexo; no hay cargos automáticos no aprobados.

### 8.2. Si el cliente elige servidor propio

Debe comprar y administrar servidor, seguridad, respaldos, energía y conectividad. Un responsable interno o proveedor especializado atenderá actualizaciones, monitoreo, certificados, recuperación y fallas; esta operación no está incluida en las 15 horas de software. Para buscar continuidad 24/7 se dimensionan relevos o guardias, redundancia y objetivos RTO/RPO. Un firewall no elimina todo riesgo y una UPS tiene autonomía limitada.

Reserva orientativa de SyborX para el servidor empresarial: **$120,000 a $200,000 + IVA** ($139,200 a $232,000 con IVA). No es una oferta vinculante ni incluye la operación 24/7. Como referencia de dimensionamiento a validar: equipo de clase Dell PowerEdge T360 o equivalente, CPU de aproximadamente ocho núcleos, 64 GB RAM ECC y SSD redundante. Licencias, instalación, seguridad, respaldo, UPS/planta, enlaces y personal se cotizan aparte después de medir carga y revisar el sitio. El alojamiento promocional permite evaluar una alternativa sin comprar ese servidor central; las sedes conservan sus equipos y servicios locales. Su condición se revisará antes de formalizar para identificar qué puede reutilizarse.


### 8.3. Preparar desde ahora la infraestructura de la web

Recomendamos definir y formalizar a la brevedad dominio a nombre de Pinturas JM, control de DNS, responsables de acceso, correo corporativo, calendario de alojamiento y renovaciones. Antes de publicar se configurarán HTTPS, respaldo y monitoreo acordados y se aprobarán contenidos, contacto y aviso de privacidad. Se aprovechará la nube promocional contratada sin duplicar hospedajes innecesarios; servicios externos y costos se documentarán antes de autorizarlos.

La primera ampliación recomendada sigue siendo catálogo, carrito y pedidos conectados, opcional y propuesta en $240,000 + IVA. **No incluye cobro electrónico.** Si el siguiente objetivo es cobrar en línea, conviene comenzar pronto la selección de pasarela y revisión de requisitos de la cuenta de vendedor de Pinturas JM. La pasarela, integración, comisiones y liquidaciones se seleccionan, cotizan y autorizan por separado; crear una cuenta de pagos no activa la integración. Antes de producción se probarán pagos, rechazos, notificaciones y devoluciones. Esta contratación sólo es necesaria antes de habilitar cobros; no condiciona la web institucional ni la primera fase de inventarios y traslados.

## 9. Acceso preferencial al ecosistema SaaS de SyborX

Además del desarrollo a la medida, SyborX está preparando dos soluciones independientes: **IntegritUS**, orientada a la gestión fiscal/contable y prevención, y un **sistema de control de Recursos Humanos**.

**Ambos sistemas se encuentran actualmente en etapas Friends & Family y de preproducción.** Friends & Family es una fase de acceso anticipado para un grupo cercano y limitado de usuarios y aliados, que permite probar las soluciones y aportar retroalimentación. Preproducción significa que los sistemas continúan en pruebas y ajustes antes de su liberación comercial; todavía no constituyen versiones de producción consolidadas.

Las dos soluciones se liberarán bajo el modelo **SaaS (Software as a Service, o software como servicio)**: acceso al software por internet mediante una suscripción, con actualizaciones y mantenimiento gestionados por el proveedor, en lugar de adquirir el desarrollo completo del producto.

**Si se concreta la negociación del presente proyecto, Pinturas JM podrá acceder a las etapas beta de ambos sistemas y contará con costos preferenciales como cliente de SyborX.** El calendario de acceso, las funcionalidades disponibles y las condiciones de participación se comunicarán conforme avance cada programa. Las tarifas preferenciales se definirán en una propuesta específica para estos servicios.

La participación beta permite conocer y evaluar funcionalidades en desarrollo y aportar retroalimentación; no supone una fecha de liberación comprometida ni la disponibilidad de todas las funciones de una versión comercial.

**Estos beneficios no reincorporan los módulos de Contabilidad ni de Recursos Humanos al alcance de la fase inicial.** Las suscripciones SaaS y sus condiciones comerciales se contratarán por separado; no están incluidas en el precio de desarrollo ni en sus membresías de mantenimiento anual o semestral.

## 10. Formalización

Revisión emitida el 3 de noviembre de 2026, vigente 30 días naturales. Se retira la oferta de desarrollo completo anterior y se conserva únicamente la fase inicial de $1,300,000 + IVA. Contrato y anexo definirán calendario, responsabilidades, transición, infraestructura y promoción de nube. Inicio sujeto a firma, anticipo e insumos acordados. Las fases posteriores se cotizarán sólo si el cliente desea contratarlas, sin precio estimado ni obligación de continuar.

Propuesta elaborada por el equipo comercial de SyborX, con el compromiso de convertir la visión de Pinturas JM en una solución que impulse su operación y acompañe su crecimiento.

Atentamente,

**LEM CARLOS VAZQUEZ LEDEZMA**  
Director Comercial y Cofundador  
**SyborX**  
Estrategia empresarial y software a la medida.
