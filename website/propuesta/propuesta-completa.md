# Propuesta de desarrollo tecnológico para Pinturas JM

**SyborX · Borrador comercial v0.1 para revisión**  
**Dirigido a:** Dirección de Pinturas JM S.A. de C.V.  
**Fecha de emisión:** por definir al aprobar esta versión.

## 1. Objetivo

Desarrollar una plataforma a la medida que conecte el centro de distribución y las 11 sucursales de Pinturas JM, con control de mercancía desde su recepción hasta su venta, preparación de color y entrega.

La solución busca reducir diferencias de inventario, errores de surtido y captura, trabajo manual y dependencia de personas clave. Cada usuario tendrá una interfaz adaptada a su función: sencilla en mostrador, guiada en almacén y con visibilidad integral para administración y dirección.

## 2. Alcance incluido

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

### 2.1. Qué se entrega en la opción B · Primera fase operativa

La opción A conserva el alcance completo del catálogo anterior. La opción B no es el mismo sistema con descuento: es una primera fase acotada para controlar inventario y traslados de un CEDIS y 11 sucursales, con piloto inicial en el CEDIS y una sucursal y despliegue posterior de las funciones aceptadas a las diez restantes.

| Área | Incluido en la primera fase de $1,000,000 + IVA | Se reserva para fases posteriores |
| --- | --- | --- |
| Catálogo y códigos | Maestro de productos, presentaciones y unidades; equivalencias proveedor/SKU; etiquetas internas y lectura con equipos compatibles. Carga inicial acordada de hasta unas 5,000 referencias. | Imágenes y catálogo de comercio electrónico, reglas comerciales avanzadas. |
| Recepción y existencias | Captura de recepciones con referencia documental del proveedor, validación por escaneo, cantidades, diferencias, lotes cuando aplique, disponible/reservado/tránsito, kardex y conteos con ajustes autorizados. | Sugeridos de compra, autorización y gestión completa de órdenes de compra, garantías de proveedor y obsequios. |
| Solicitudes y traslados | Solicitud manual por sucursal, autorización central, reserva, picking y etiquetas, despacho, seguimiento por estados, recepción ciega y parcial, incidencias y resolución auditada. | Reabastecimiento automático, optimización de rutas y GPS/telemetría. |
| Control por usuario | Roles de tienda, almacén, central y supervisión; alcance por sucursal, bitácora y resumen básico de pendientes, existencias y diferencias. | Analítica avanzada, tableros gerenciales extensos y asistentes de IA. |
| Saldos durante la transición | Carga inicial validada y registro manual controlado o importación por plantilla de salidas por ventas/consumos; validación para evitar duplicados por referencia. Se acuerda un único mecanismo por flujo. | Integración automática o permanente con SAE/POS y sincronización bidireccional. |
| Puesta en marcha | Diseño UX de esta fase, backend de sus flujos, pruebas, migración inicial acordada, piloto, capacitación por rol, manuales y despliegue de las funciones incluidas. | Portal comercial conectado, carrito y pedidos web, contact center, canales externos. |
| Procesos especializados | Se conservan las referencias de producto/color en los movimientos incluidos. | Laboratorio y fórmulas, consumo por pigmento, kits, apertura/fraccionamiento y producción/reenvase, POS y mayoreo completos, cortes, crédito, facturación y PAC. |

**Condición de operación de la fase inicial:** la venta, el igualado, la producción y la facturación siguen en el sistema o procedimiento actual. Antes del piloto se acordará cómo registrar sus efectos en inventario, quién los concilia y cuál es la fuente oficial por flujo. No se prometerán existencias al día si no se registran oportunamente las salidas; no se incluyen conectores automáticos al sistema anterior. Si el mecanismo manual o por plantilla no es viable, se deberá redefinir la transición antes de la aceptación, sin presumir una integración incluida.

Las fases posteriores se priorizarán y cotizarán por separado. El precio de la primera fase no garantiza que completar el sistema después cueste únicamente la diferencia frente a la opción A. Se buscará reutilizar la base construida; no se volverán a cobrar componentes ya entregados sin una ampliación o cambio expresamente acordado.

### Definiciones técnicas que se cerrarán en el levantamiento

Se documentarán los volúmenes reales de las presentaciones, unidades de pigmentos, reglas de kits, catálogo de etiquetas, política de crédito sin conexión, equipos, responsables y ventanas de recepción. La captura manual validada será el respaldo para procesos sin integración de hardware.

La operación offline se refiere al POS y a los flujos expresamente definidos. La autorización de tarjeta o transferencia depende de los servicios bancarios; el timbrado fiscal se realizará con conexión. Se establecerán límites de autonomía y políticas de conflicto antes de las pruebas de aceptación.

## 3. Implementación y entregables

| Etapa | Entregables principales | Ventana propuesta |
| --- | --- | --- |
| **0. Levantamiento y diseño** | Mapa de procesos, alcance detallado, matriz de usuarios y permisos, criterios de aceptación, arquitectura, revisión de datos de SAE, inventario de equipos y prototipo validado con usuarios. | Semanas 1–5 |
| **1. Base operativa y CEDIS** | Catálogo, códigos, compras, recepción, inventarios, producción JM, roles y trazabilidad. | Semanas 6–18 |
| **2. Color y distribución** | Fórmulas, kits, consumo de insumos, reabasto, tránsito y recepción en sucursal. Incluye el servicio mínimo de tickets necesario para probar la vinculación de igualados y ventas. | Semanas 15–23 |
| **3. Venta y control** | POS, mayoreo, cortes, crédito, facturación, tableros y asistencia operativa. | Semanas 19–29 |
| **4. Integración y despliegue** | Diseño y puesta en marcha de la web vinculada al portal operativo, catálogo y pedidos, seguimiento comercial, migración validada, capacitación, piloto en CEDIS y una sucursal, despliegue a las sucursales restantes y entrega documental. | Semanas 27–34 |

**Plazo propuesto para la opción A:** 34 semanas de ejecución, seguidas de 30 días naturales de estabilización incluidos. Las etapas se traslapan y se realizarán demostraciones periódicas de avances. Las fechas calendario se fijarán al acordar el inicio y la disponibilidad de insumos y responsables.

Se entregarán manuales por rol, documentación técnica, repositorio de código y configuración de despliegue. La cesión del desarrollo específico se formalizará en el contrato y se hará efectiva al liquidar el proyecto; las herramientas y componentes de terceros conservarán sus licencias correspondientes. No se cobrará licencia por usuario por el desarrollo propio.

## 4. Inversión · Dos formas de avanzar

Emisión: **28 de octubre de 2026**. Vigencia: **30 días naturales a partir de la emisión**. Esta revisión sustituye la promoción anterior del 31 de octubre y el esquema de cinco paquetes. Todos los importes están en MXN; IVA calculado al 16% y separado del precio de desarrollo. Ambas alternativas contemplan pagos diferidos sin intereses adicionales.

| Concepto | Opción A · Desarrollo completo | Opción B · Primera fase operativa |
| --- | ---: | ---: |
| Desarrollo antes de IVA | **$2,200,000.00** | **$1,000,000.00** |
| IVA · 16% | $352,000.00 | $160,000.00 |
| **Total con IVA** | **$2,552,000.00** | **$1,160,000.00** |
| Anticipo 30%, antes de IVA | $660,000.00 | $300,000.00 |
| IVA del anticipo | $105,600.00 | $48,000.00 |
| **Anticipo total con IVA** | **$765,600.00** | **$348,000.00** |
| Saldo antes de IVA | $1,540,000.00 | $700,000.00 |
| Mensualidades del saldo | 12 | 6 |
| Primera mensualidad | **60 días naturales después del anticipo** | **30 días naturales después del anticipo** |
| Mantenimiento mensual antes de IVA | **$20,000 / hasta 20 horas** | **$15,000 / hasta 15 horas** |
| Mantenimiento mensual con IVA | $23,200 | $17,400 |

### Opción A · Plataforma completa

Incluye los 13 módulos descritos, diseño de la página web vinculada al portal, pruebas, migración acordada, capacitación y despliegue. El precio de $2,200,000 + IVA no depende de la promoción anterior. El calendario de desarrollo propuesto es de 34 semanas, más 30 días de estabilización; se acuerdan inicio e insumos en contrato. Los pagos diferidos no amplían automáticamente ese calendario.

### Opción B · Primera fase por $1,000,000 + IVA

Incluye exclusivamente la fase operativa delimitada en la sección 2.1. Calendario preliminar propuesto: **20 a 24 semanas**, más 30 días de estabilización, sujeto a la validación del levantamiento, datos, transición y disponibilidad de usuarios. Los módulos pospuestos no se incluyen por haber sido mostrados en el prototipo o en los diagramas del alcance completo.

Servidores, administración de infraestructura y consumos externos no están incluidos en ninguna opción ni en sus membresías de mantenimiento. Se presupuestan por separado en la sección 8.1.

## 5. Anticipo y pagos diferidos

**Referencia de fechas:** D es el día de recepción del anticipo. La opción A deja un mes de gracia: su primera mensualidad vence en D + 60 días. En la opción B vence en D + 30 días. Las siguientes vencen mensualmente en el día calendario acordado; cuando no exista ese día, se usará el último día del mes. El calendario con fechas exactas se anexará al contrato.

| Pago | Opción A · Antes de IVA | Opción B · Antes de IVA |
| --- | ---: | ---: |
| Anticipo al formalizar | $660,000.00 | $300,000.00 |
| Mensualidades ordinarias | 11 de $128,333.33 | 5 de $116,666.67 |
| Última mensualidad ajustada | 1 de $128,333.37 | 1 de $116,666.65 |
| **Total antes de IVA** | **$2,200,000.00** | **$1,000,000.00** |
| **IVA total** | **$352,000.00** | **$160,000.00** |
| **Total con IVA** | **$2,552,000.00** | **$1,160,000.00** |

Cada pago lleva IVA. Como referencia, la mensualidad de la opción A es aproximadamente **$148,866.67 con IVA** y la de B aproximadamente **$135,333.33 con IVA**. La última factura ajustará centavos y redondeos de IVA para que el total facturado coincida con el total pactado; las cifras aproximadas no sustituyen el calendario exacto de facturación.

Este esquema sustituye el anterior 30/20/20/20/10. Las mensualidades corresponden a fechas de pago, no a nuevos hitos de aceptación; los entregables seguirán teniendo criterios y revisiones conjuntas, sin aceptación por silencio. No se añaden intereses por el diferimiento. Vencimientos exactos, tratamiento de retrasos y cualquier suspensión deberán acordarse por escrito; no se incorporan penalizaciones automáticas en este borrador. La cesión del desarrollo específico conserva su condición de liquidación y contrato.

## 6. Exclusiones expresas

### Recursos Humanos

No se incluyen portal del empleado, vacaciones, permisos, préstamos, asistencia, relojes checadores, comisiones laborales, expedientes, incidencias, nómina ni CFDI de nómina.

### Contabilidad

No se incluyen contabilidad general o avanzada, pólizas y su exportación a Aspel COI, integración contable con COI u otro sistema, cuentas por pagar avanzadas y cotejo triple, conciliación bancaria automatizada, centros de costo, estados financieros contables, cierre mensual contable ni declaraciones fiscales.

Los costos de producto, consumos, márgenes comerciales, cortes, crédito a clientes y facturación incluidos sirven a la operación; no sustituyen la contabilidad del cliente.

### Otros conceptos no incluidos

- Compra e instalación de computadoras, lectores, impresoras, básculas, cámaras, terminales, redes, cableado, racks, jaulas o sellos físicos. El software de control y etiquetado sí forma parte del alcance señalado.
- Integración directa con dosificadoras, mezcladoras, espectrofotómetros, básculas o terminales bancarias. Se cotizará después de verificar marca, modelo, protocolo y acceso del fabricante.
- Pasarela y cobro en línea, comisiones bancarias, aplicaciones móviles nativas, telefonía de contact center, WhatsApp u otros conectores externos y campañas de marketing.
- Implementación completa de ubicaciones por rack/pasillo, auditoría externa presencial permanente y servicios de asesoría fiscal, contable o laboral.
- Operación paralela o integración permanente con Aspel SAE después de la migración, salvo el periodo de transición expresamente definido.
- Servidores físicos o virtuales, infraestructura en nube y hospedaje: **la cotización no incluye servidores; se podrán cotizar por separado** según las necesidades del proyecto.
- Dominios, certificados de pago cuando apliquen, PAC/timbres, licencias, APIs y consumo de servicios de inteligencia artificial de terceros.

## 7. Condiciones de trabajo y aceptación

El dimensionamiento base contempla un CEDIS, 11 sucursales y aproximadamente 5,000 referencias. Antes de formalizar el contrato se confirmarán cajas, usuarios concurrentes, un RFC emisor base, PAC y sistemas de origen; cualquier diferencia se resolverá expresamente en el anexo de alcance.

Pinturas JM designará un responsable con disponibilidad aproximada de ocho horas semanales y procurará revisar entregables en cinco días hábiles. Proporcionará acceso autorizado a datos y equipos, fichas técnicas, reglas de negocio y personal para validar los procesos.

SyborX proporcionará plantillas y herramientas de carga y ejecutará la migración del catálogo, clientes, proveedores, saldos e inventario inicial acordados. Pinturas JM validará y depurará la información y realizará el conteo físico de apertura con sus responsables; la limpieza manual ilimitada de históricos no está incluida.

El piloto comprobará, entre otros puntos: recepción parcial sin inventario fantasma; consumo por componente de kit; igualado vinculado al ticket; sincronización sin duplicados; cortes con diferencias trazables y acceso restringido por rol. Las pruebas usarán datos y equipos autorizados por el cliente.

## 8. Garantía, mantenimiento e infraestructura

Se incluyen **30 días de estabilización** después del despliegue y **90 días de garantía por defectos respecto del alcance aceptado**, desde la aceptación final de la opción contratada. Los defectos cubiertos se atienden sin cargo adicional. El mantenimiento comienza **al concluir la garantía**, no durante el desarrollo ni por el solo hecho de comenzar a pagar mensualidades del saldo. El financiamiento del desarrollo y el mantenimiento son conceptos distintos y pueden coincidir después de la garantía.

| Membresía de mantenimiento de software | Opción A | Opción B |
| --- | ---: | ---: |
| Cuota mensual antes de IVA | **$20,000** | **$15,000** |
| Cuota mensual con IVA | $23,200 | $17,400 |
| Horas incluidas al mes | **Hasta 20 horas** | **Hasta 15 horas** |
| Acumulación de horas | No acumulables | No acumulables |
| Alcance | Plataforma completa y web contratadas | Únicamente funciones de la primera fase contratada |

La bolsa incluye diagnóstico, soporte funcional, mantenimiento correctivo no cubierto por garantía y ajustes menores sobre funciones ya entregadas, con priorización y registro de horas. Las mejoras que requieran nuevos módulos, integraciones o un proyecto adicional se cotizan aparte. Horas excedentes y trabajos extraordinarios se cotizan y requieren aprobación previa. No hay cargo de mantenimiento multiplicado por sucursal.

Objetivo de primera respuesta a incidentes críticos: cuatro horas hábiles dentro del horario que se acuerde. Se refiere a respuesta, no a resolución garantizada; no incluye guardia 24/7. La disponibilidad y los tiempos también dependen de energía, conectividad, infraestructura y servicios de terceros. Al añadir futuras fases se revisará expresamente el alcance y precio de mantenimiento, sin aumentos automáticos.

### 8.1. Servidor propio · Presupuesto preliminar independiente

**Comprar el servidor no equivale a tenerlo administrado.** Pinturas JM deberá designar o contratar a una persona o proveedor de infraestructura para monitoreo, actualizaciones del sistema operativo, seguridad, accesos, certificados, revisión de respaldos, pruebas de recuperación, capacidad y atención a fallas de hardware/red. No es obligatorio contratar una persona exclusiva si un proveedor puede cubrir esas responsabilidades y horarios. Esta administración no está incluida en las 20 o 15 horas de mantenimiento de software y se cotiza aparte.

La arquitectura preliminar considera un servidor central para aplicación y base de datos, al que accedan por conexión segura el CEDIS y las 11 sucursales. No se necesitan once servidores por ese solo hecho. El dimensionamiento depende de cajas y usuarios simultáneos, transacciones, históricos, adjuntos, base de datos, disponibilidad y recuperación requeridas. **La siguiente configuración es una referencia para solicitar cotizaciones, no una capacidad garantizada ni una orden de compra.**

| Componente de referencia | Configuración preliminar a validar |
| --- | --- |
| Servidor empresarial | Dell PowerEdge T360 o equivalente, CPU de clase servidor de aproximadamente 8 núcleos, 64 GB RAM ECC ampliables y soporte del fabricante. Se verificará el SKU exacto. |
| Almacenamiento | Dos SSD empresariales de aproximadamente 960 GB a 1.92 TB en espejo, controladora compatible y monitoreo. El RAID no sustituye los respaldos. Capacidad útil y crecimiento se validan. |
| Protección y respaldo | UPS dimensionado, respaldo cifrado externo al servidor y copia fuera del sitio, con pruebas de restauración y retención acordada. |
| Red y acceso | Firewall, acceso seguro por TLS y administración restringida; conectividad estable en CEDIS y sucursales y evaluación de enlace redundante. No se expondrá la base de datos directamente a internet. |
| Sistema operativo y licencias | A definir con backend e integraciones. Si se elige Windows Server, revisar licenciamiento y derechos de acceso aplicables; no se presume incluido. |

**Reserva presupuestal orientativa de SyborX: $100,000 a $180,000 MXN antes de IVA** para servidor configurado, protección eléctrica y respaldo básico; con IVA, **$116,000 a $208,800 MXN**. Es una estimación de planeación, no una cotización vinculante de proveedor. No incluye administrador, conectividad, adecuaciones eléctricas/climatización, licencias, implementación de red, consumos de nube ni alta disponibilidad. El costo final deberá respaldarse con propuesta vigente del proveedor, stock, garantía, instalación y configuración exactas antes de contratar.

Como referencia comercial consultada el **28 de octubre de 2026**, PCdigital publica un Dell T360 con Xeon E-2478, 16 GB RAM y disco duro de 2 TB en **$66,668 MXN con IVA**, marcado como agotado. **No es la configuración recomendada, no garantiza disponibilidad y no representa el presupuesto completo**: ampliar memoria, añadir SSD redundantes, UPS, respaldo y servicios modifica el precio. El fabricante documenta memoria ECC y capacidad de ampliación para esta familia, sujetas a configuración.

Fuentes de referencia: [Ficha del fabricante Dell T360](https://www.dell.com/en-us/shop/ipovw/poweredge-t360), [referencia comercial PCdigital, precio y disponibilidad sujetos a cambio](https://www.pcdigital.com.mx/servidor-dell-poweredge-t360-intel-xeon-e-2478-2-8ghz-16gb-ddr5-2tb-sata-iii-t360-fy26q1-mx/), [guía de licenciamiento Windows Server](https://www.microsoft.com/licensing/guidance/Windows-Server-2025).

Un único servidor en CEDIS es un punto de falla: un corte de energía, internet o avería puede afectar a las sucursales. La opción A mantiene únicamente la continuidad offline del POS expresamente delimitada; **la opción B no incluye operación offline**. Alta disponibilidad, segundo servidor, recuperación avanzada o alternativa en nube requieren diseño y cotización independientes. La elección de infraestructura se cerrará con pruebas de carga y objetivos de respaldo/recuperación antes del despliegue productivo.

## 9. Acceso preferencial al ecosistema SaaS de SyborX

Además del desarrollo a la medida, SyborX está preparando dos soluciones independientes: **IntegritUS**, orientada a la gestión fiscal/contable y prevención, y un **sistema de control de Recursos Humanos**.

**Ambos sistemas se encuentran actualmente en etapas Friends & Family y de preproducción.** Friends & Family es una fase de acceso anticipado para un grupo cercano y limitado de usuarios y aliados, que permite probar las soluciones y aportar retroalimentación. Preproducción significa que los sistemas continúan en pruebas y ajustes antes de su liberación comercial; todavía no constituyen versiones de producción consolidadas.

Las dos soluciones se liberarán bajo el modelo **SaaS (Software as a Service, o software como servicio)**: acceso al software por internet mediante una suscripción, con actualizaciones y mantenimiento gestionados por el proveedor, en lugar de adquirir el desarrollo completo del producto.

**Si se concreta la negociación del presente proyecto, Pinturas JM podrá acceder a las etapas beta de ambos sistemas y contará con costos preferenciales como cliente de SyborX.** El calendario de acceso, las funcionalidades disponibles y las condiciones de participación se comunicarán conforme avance cada programa. Las tarifas preferenciales se definirán en una propuesta específica para estos servicios.

La participación beta permite conocer y evaluar funcionalidades en desarrollo y aportar retroalimentación; no supone una fecha de liberación comprometida ni la disponibilidad de todas las funciones de una versión comercial.

**Estos beneficios no reincorporan los módulos de Contabilidad ni de Recursos Humanos al alcance de desarrollo de cualquiera de las dos modalidades.** Las suscripciones SaaS y sus condiciones comerciales se contratarán por separado; no están incluidas en los importes de ninguna modalidad ni en las membresías de mantenimiento de la opción A ($20,000 + IVA) o B ($15,000 + IVA).

## 10. Formalización

Esta revisión se emite el **28 de octubre de 2026**, con vigencia de **30 días naturales desde su emisión**, y sustituye los precios, promoción y condiciones de pago anteriores. Se formalizará la opción elegida, su alcance, calendario y responsables en contrato y anexo. El inicio requiere firma, anticipo e insumos/accesos acordados. Las fases posteriores de B requieren contratación independiente. Se mantienen las exclusiones y beneficios SaaS descritos, sin reincorporar RRHH ni Contabilidad al desarrollo.

Propuesta elaborada por el equipo comercial de SyborX, con el compromiso de convertir la visión de Pinturas JM en una solución que impulse su operación y acompañe su crecimiento.

Atentamente,

**LEM CARLOS VAZQUEZ LEDEZMA**  
Director Comercial y Cofundador  
**SyborX**  
Estrategia empresarial y software a la medida.
