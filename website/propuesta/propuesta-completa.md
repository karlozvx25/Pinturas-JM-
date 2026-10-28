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

**Plazo propuesto:** 34 semanas de ejecución, seguidas de 30 días naturales de estabilización incluidos. Las etapas se traslapan y se realizarán demostraciones periódicas de avances. Las fechas calendario se fijarán al acordar el inicio y la disponibilidad de insumos y responsables.

Se entregarán manuales por rol, documentación técnica, repositorio de código y configuración de despliegue. La cesión del desarrollo específico se formalizará en el contrato y se hará efectiva al liquidar el proyecto; las herramientas y componentes de terceros conservarán sus licencias correspondientes. No se cobrará licencia por usuario por el desarrollo propio.

## 4. Inversión y modalidades de contratación

Se presentan dos alternativas excluyentes para contratar el mismo alcance total. Todos los importes se expresan en pesos mexicanos. El IVA se calcula al 16% y se muestra por separado.

### Opción A · Desarrollo completo con precio preferencial

| Concepto | Importe MXN |
| --- | ---: |
| Desarrollo completo con precio preferencial | **$2,500,000** |
| IVA · 16% | $400,000 |
| **Total con IVA** | **$2,900,000** |
| Ahorro frente a la suma de paquetes, antes de IVA | **$500,000** |

**Condición de la promoción: firma del contrato por todo el desarrollo y pago del anticipo a más tardar el 31 de octubre de 2026, hora del centro de México.** El anticipo es del 30%: $750,000 más $120,000 de IVA, para un pago inicial de $870,000. Ambas condiciones deben cumplirse dentro de la vigencia; una firma sin anticipo no activa el precio preferencial. Esta fecha no se extiende por la vigencia general del documento. Fuera de ese plazo, el precio preferencial deja de aplicar y la contratación deberá formalizarse conforme a las condiciones vigentes, sin renovación automática de la promoción.

La opción A incluye el alcance completo descrito, diseño web vinculado al portal, pruebas, migración acordada, capacitación, despliegue y estabilización. No reduce módulos ni entregables.

### Opción B · Contratación por paquetes de implementación

Permite contratar y ejecutar por etapas. Los cinco paquetes suman $3,000,000 más IVA si se contrata todo el alcance. La promoción de la opción A no se aplica a contrataciones parciales ni se acumula con los precios de estos paquetes.

| Paquete | Alcance agrupado | Dependencias | Sin IVA | IVA · 16% | Total con IVA |
| --- | --- | --- | ---: | ---: | ---: |
| 01 · Base operativa y CEDIS | Catálogo y códigos de barras; compras y recepción; inventarios y producción JM; seguridad y trazabilidad. Incluye levantamiento y arquitectura base. | Punto de partida obligatorio para los demás paquetes. | $900,000 | $144,000 | $1,044,000 |
| 02 · Color y distribución | Reabastecimiento y distribución; laboratorio de igualación; kits técnicos y complementos. Incluye el servicio mínimo de tickets para validar la vinculación de igualados. | Requiere el paquete 1. La venta completa se habilita con el paquete 3. | $650,000 | $104,000 | $754,000 |
| 03 · Venta y control | Punto de venta y mayoreo; cortes y control de crédito; facturación electrónica con PAC seleccionado. | Requiere el paquete 1; para vender igualados y kits con consumo integrado, también el paquete 2. | $700,000 | $112,000 | $812,000 |
| 04 · Dirección e inteligencia operativa | Tableros, alertas y asistencia contextual sobre datos y documentos autorizados. Decisiones sensibles con aprobación humana. | Requiere el paquete 1 y los paquetes operativos que generen los datos a analizar; ventas y cartera requieren el paquete 3. | $400,000 | $64,000 | $464,000 |
| 05 · Web, atención e integración final | Diseño web y portal, catálogo y pedidos; atención y seguimiento comercial; integración final, piloto global y despliegue del conjunto contratado. | Requiere el paquete 1; precios y pedidos conectados requieren el paquete 3. La integración global requiere los paquetes que se contraten. | $350,000 | $56,000 | $406,000 |
| **Total de los cinco paquetes** | **Alcance completo** | **Ejecución coordinada por dependencias** | **$3,000,000** | **$480,000** | **$3,480,000** |

Los importes de la opción B son por paquete, no mensualidades ni financiamiento. Sólo se contratarán los paquetes expresamente acordados, respetando sus requisitos previos. El paquete 1 establece la base compartida y no se vuelve a cobrar en los paquetes posteriores. Las pruebas, documentación, capacitación y puesta en marcha del alcance de cada paquete están incluidas en su importe; la coordinación y despliegue global del conjunto se contemplan en el paquete 5. No se duplicarán cargos de integración ya incluidos.

**Cada contratación modular tendrá su propio calendario, entregables, criterios de aceptación y esquema de pagos, que se acordarán por escrito antes de iniciar.** Las 34 semanas propuestas corresponden al desarrollo completo coordinado, no a la suma automática de contrataciones separadas ni a un plazo garantizado para cada paquete. El intervalo entre contrataciones puede modificar el calendario global. Un paquete no contratado no estará disponible ni se considerará entregado.

### Servicios recurrentes e infraestructura · Ambas opciones

| Concepto | Importe y condición |
| --- | --- |
| Mantenimiento de la plataforma y la web | **$30,000 MXN más IVA mensuales** ($34,800 con IVA), con el alcance y comienzo de la sección 8. No se multiplica por paquete. |
| Servidores físicos o virtuales, nube y hospedaje | **No incluidos. Se podrán cotizar por separado** según capacidad, seguridad y operación. |

El mantenimiento es independiente de ambas inversiones. En contratación modular, su inicio se acordará según la aceptación y garantía del alcance puesto en operación, sin cobro por defectos cubiertos por garantía ni duplicidad de mantenimiento por paquete. Se conservan las exclusiones de RRHH, Contabilidad, hardware y servicios de terceros.

El precio se formalizará en el contrato y anexo del alcance elegido. Las ampliaciones requieren aprobación escrita de su impacto económico y de calendario; no se aplicarán incrementos automáticos por decisiones internas de implementación.

## 5. Esquema de pagos · Opción A

Se conserva el esquema 30% / 20% / 20% / 20% / 10%, calculado sobre los $2,500,000 MXN antes de IVA de la opción A.

| Hito | Porcentaje | Sin IVA | IVA · 16% | Total con IVA |
| --- | ---: | ---: | ---: | ---: |
| Firma e inicio del proyecto | 30% | $750,000 | $120,000 | $870,000 |
| Aceptación de base operativa y CEDIS | 20% | $500,000 | $80,000 | $580,000 |
| Aceptación de color, kits y distribución | 20% | $500,000 | $80,000 | $580,000 |
| Aceptación del piloto operativo integrado | 20% | $500,000 | $80,000 | $580,000 |
| Despliegue completo y cierre de estabilización | 10% | $250,000 | $40,000 | $290,000 |
| **Total** | **100%** | **$2,500,000** | **$400,000** | **$2,900,000** |

El anticipo debe pagarse dentro de la vigencia promocional indicada. Los demás hitos se comprobarán contra los entregables y criterios de aceptación del anexo. La revisión será conjunta; no se presume aceptación por silencio. Los vencimientos y tratamiento de retrasos se definirán en el contrato. **Esta tabla corresponde a la opción A; los pagos por paquete de la opción B se acordarán en cada contratación.**

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

## 8. Garantía, soporte y operación

Se incluyen **30 días de estabilización** después del despliegue y **90 días de garantía por defectos respecto del alcance aceptado**, contados desde la aceptación final. Nuevas funciones y cambios de alcance se cotizan por separado.

**Mantenimiento mensual de la plataforma y la página web:** $30,000 MXN más IVA mensuales, con hasta 40 horas de servicio, monitoreo y mantenimiento correctivo/evolutivo dentro de esa bolsa. Objetivo de primera respuesta a incidentes críticos: cuatro horas hábiles dentro del horario de atención que se acuerde. Este tiempo corresponde a respuesta, no a resolución garantizada. No implica atención 24/7. Vigencia, horario, excedentes y servicios cubiertos se formalizarán por separado.

Los defectos cubiertos por la garantía se atenderán sin cargo adicional. El servicio de mantenimiento mensual comenzará al concluir la garantía, evitando doble cobro por el mismo servicio.

**Los servidores no están incluidos en esta cotización ni en los $30,000 MXN de mantenimiento mensual. Se podrán cotizar por separado**, junto con la infraestructura y los consumos de terceros, según capacidad y uso y antes de su contratación. Estos costos podrán comenzar durante las pruebas y no forman parte de los $3,000,000 MXN de desarrollo.

## 9. Acceso preferencial al ecosistema SaaS de SyborX

Además del desarrollo a la medida, SyborX está preparando dos soluciones independientes: **IntegritUS**, orientada a la gestión fiscal/contable y prevención, y un **sistema de control de Recursos Humanos**.

**Ambos sistemas se encuentran actualmente en etapas Friends & Family y de preproducción.** Friends & Family es una fase de acceso anticipado para un grupo cercano y limitado de usuarios y aliados, que permite probar las soluciones y aportar retroalimentación. Preproducción significa que los sistemas continúan en pruebas y ajustes antes de su liberación comercial; todavía no constituyen versiones de producción consolidadas.

Las dos soluciones se liberarán bajo el modelo **SaaS (Software as a Service, o software como servicio)**: acceso al software por internet mediante una suscripción, con actualizaciones y mantenimiento gestionados por el proveedor, en lugar de adquirir el desarrollo completo del producto.

**Si se concreta la negociación del presente proyecto, Pinturas JM podrá acceder a las etapas beta de ambos sistemas y contará con costos preferenciales como cliente de SyborX.** El calendario de acceso, las funcionalidades disponibles y las condiciones de participación se comunicarán conforme avance cada programa. Las tarifas preferenciales se definirán en una propuesta específica para estos servicios.

La participación beta permite conocer y evaluar funcionalidades en desarrollo y aportar retroalimentación; no supone una fecha de liberación comprometida ni la disponibilidad de todas las funciones de una versión comercial.

**Estos beneficios no reincorporan los módulos de Contabilidad ni de Recursos Humanos al alcance de desarrollo de cualquiera de las dos modalidades.** Las suscripciones SaaS y sus condiciones comerciales se contratarán por separado; no están incluidas en los importes de ninguna modalidad ni en los $30,000 MXN más IVA de mantenimiento mensual del proyecto a la medida.

## 10. Formalización

Esta versión es un borrador para revisión. La cotización final tendrá una vigencia general propuesta de 30 días naturales desde su emisión; esta vigencia no extiende la promoción de la opción A, que exige firma y anticipo a más tardar el 31 de octubre de 2026. El inicio se acordará después de firmar contrato y anexo de alcance, recibir el anticipo y habilitar los accesos e insumos necesarios.

Propuesta elaborada por el equipo comercial de SyborX, con el compromiso de convertir la visión de Pinturas JM en una solución que impulse su operación y acompañe su crecimiento.

Atentamente,

**LEM CARLOS VAZQUEZ LEDEZMA**  
Director Comercial y Cofundador  
**SyborX**  
Estrategia empresarial y software a la medida.
