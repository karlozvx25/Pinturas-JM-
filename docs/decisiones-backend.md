# Decisiones críticas del backend

[Volver al manual](../README.md)

**Estado de todas las entradas: pendiente de validación.** Las propuestas ayudan a acotar el diseño; no constituyen acuerdos con Pinturas JM ni una selección definitiva de tecnología.

Cada decisión deberá registrar: responsable, fecha, alternativa elegida, motivo, evidencia del cliente, cambios en contratos y pruebas de aceptación. Si una prueba cambia una regla del negocio, también se actualiza el manual y la UX.

## 1. Puertas de decisión

| Puerta | Se resuelve antes de | Decisiones |
|---|---|---|
| P0 · Integridad base | Implementar comandos de inventario | D01–D07 |
| P1 · Ciclo operativo | Pilotear compras, traslados y transformaciones | D08–D14 |
| P2 · Integraciones y explotación | Conectar servicios externos y desplegar a la red | D15–D20 |

## 2. Registro acotado

### D01 · Fuente de verdad y relación con SAE — P0

- **Pregunta:** ¿qué sistema decide el catálogo, el saldo y los movimientos de cada dominio?
- **Alternativas:** SAE como maestro; nuevo sistema como maestro; propiedad separada por dominio con conciliación.
- **Propuesta a evaluar:** una autoridad explícita por dato, con un mapa de propiedad y correspondencia de identificadores.
- **Deciden:** arquitectura, responsable SAE, inventarios y dirección.
- **Cierre:** demostrar con datos de prueba compra, traslado, devolución y ajuste sin divergencias; acordar manejo de retrasos y correcciones.

### D02 · Libro de movimientos y saldo — P0

- **Pregunta:** ¿cómo se representan físico, reservado, disponible, tránsito y stock abierto?
- **Alternativas:** eventos/movimientos como registro principal con saldos derivados; saldos transaccionales más libro verificable.
- **Propuesta a evaluar:** movimientos duraderos y saldos conciliables; no permitir edición directa sin documento de ajuste.
- **Deciden:** backend, inventarios y auditoría.
- **Cierre:** reconstruir un saldo desde sus movimientos y explicar cada diferencia por ubicación, presentación y unidad.

### D03 · Reserva y concurrencia — P0

- **Pregunta:** ¿qué operación impide dos compromisos incompatibles de stock?
- **Alternativas:** actualización condicional/versionada; bloqueos de registros dentro de una transacción; estrategia equivalente del motor elegido.
- **Propuesta a evaluar:** transacción corta con condición de disponibilidad y versión consistente.
- **Deciden:** backend y QA.
- **Cierre:** dos solicitudes simultáneas no generan reserva superior al saldo; una falla devuelve un conflicto atendible en UI.

### D04 · Idempotencia de comandos y lecturas — P0

- **Pregunta:** ¿cómo se diferencia un reintento de red de una lectura física adicional?
- **Propuesta a evaluar:** clave de idempotencia por comando de confirmación y `clientEventId` por lectura. Una lectura nueva tiene ID nuevo; reenviar la misma conserva su ID.
- **Deciden:** backend, frontend y QA.
- **Cierre:** después de un timeout, repetir despacho/recepción no duplica movimiento. Leer tres piezas iguales con tres eventos distintos cuenta tres unidades.

### D05 · Identidad, puestos y alcance — P0

- **Pregunta:** ¿qué usuarios pueden actuar y en qué sucursales?
- **Alternativas:** identidad corporativa o cuentas del sistema; permisos por puesto, persona y alcance.
- **Propuesta a evaluar:** sesión autenticada con permisos de acción y conjunto de ubicaciones; toda API verifica ese alcance.
- **Deciden:** operaciones, seguridad y arquitectura.
- **Cierre:** una cuenta de tienda no consulta ni recibe otra sucursal aunque cambie URL, payload, folio o parámetros.

### D06 · Catálogo, SKU y presentaciones — P0

- **Pregunta:** ¿qué diferencia producto, color, presentación, unidad y marca?
- **Propuesta a evaluar:** entidades y campos independientes; tabla de correspondencias con SAE; no reutilizar marca como descripción de uso.
- **Deciden:** catálogo, compras y backend.
- **Cierre:** dos colores o presentaciones de igual precio siguen siendo referencias distintas, con historial y factores claros.

### D07 · Unidades y precisión — P0

- **Pregunta:** ¿cuáles son las unidades canónicas, precisión, tolerancia y reglas de redondeo?
- **Propuesta a evaluar:** cantidades decimales exactas o enteros en subunidad, según dominio; factores versionados; dinero separado de cantidades.
- **Deciden:** producción, inventarios, finanzas y backend.
- **Cierre:** apertura y reenvasado conservan balance dentro de tolerancia aprobada. Gramos a litros queda bloqueado sin densidad y condiciones autorizadas.

### D08 · Identificación por código de barras — P1

- **Pregunta:** ¿cuándo se usa código del fabricante, interno, de lote, bulto o pieza serializada?
- **Alternativas:** alias por presentación; etiquetas de lote/bulto; serialización por unidad si el negocio la exige.
- **Propuesta a evaluar:** separar tipo de entidad identificada y mantener múltiples alias homologados. Code 128 es la simbología de la demo, no una política de identificación completa.
- **Deciden:** almacén, catálogo e infraestructura.
- **Cierre:** matriz de códigos válida con equipo físico; no se confunde abrir un traslado con recibir sus productos ni se promete detectar una pieza duplicada sólo por SKU.

### D09 · Documento de traslado y estados — P1

- **Pregunta:** ¿una orden tiene múltiples renglones, lotes, bultos y entregas? ¿Se permite parcial de surtido?
- **Propuesta a evaluar:** cabecera + renglones + reservas + despachos + recepciones. Mantener evidencia de modificaciones aprobadas.
- **Deciden:** logística, almacén y producto.
- **Cierre:** definir explícitamente pendiente, rechazado, cancelado, surtido parcial, en tránsito, recibido e incidencia. La demo de una sola referencia no limita el modelo final.

### D10 · Resolución de faltantes, daños y devoluciones — P1

- **Pregunta:** ¿cómo se cierra una diferencia cuando la pieza no llegará o regresa al origen?
- **Propuesta a evaluar:** documento de resolución y movimientos compensatorios autorizados; nunca cerrar borrando pendiente.
- **Deciden:** logística, gerencia, finanzas y auditoría.
- **Cierre:** cada faltante termina recibido, devuelto, reconocido o compensado con autorización, sin doble imputación a merma.

### D11 · Lotes, caducidad y rotación — P1

- **Pregunta:** ¿qué referencias exigen lote y fecha? ¿Cómo se selecciona stock para surtir?
- **Alternativas:** control por SKU; control por lote/ubicación; FEFO/FIFO según producto y operación.
- **Propuesta a evaluar:** política configurable por familia y genealogía conservada en transformaciones.
- **Deciden:** almacén, calidad y catálogo.
- **Cierre:** evitar surtir lotes bloqueados y recuperar origen/destino de cada lote. La demo sólo captura datos declarados, no implementa FEFO.

### D12 · Apertura, reenvasado y genealogía — P1

- **Pregunta:** ¿quién abre envases, con qué factor, tolerancia, insumos y control de remanente?
- **Propuesta a evaluar:** órdenes de transformación con entradas/salidas por lote, factor aprobado y merma explícita; registrar envases u otros insumos cuando apliquen.
- **Deciden:** producción, almacén y calidad.
- **Cierre:** balance y genealogía verificables; una misma entrada no se consume dos veces y el stock abierto conserva color/presentación de origen.

### D13 · Igualación, consumo y venta — P1

- **Pregunta:** ¿qué consume un trabajo real y cómo se vincula a ticket, cobro y devolución?
- **Propuesta a evaluar:** separar orden técnica, receta versionada, consumos medidos, resultado físico y documento comercial.
- **Deciden:** igualación, POS/finanzas, calidad y backend.
- **Cierre:** poder explicar litros producidos, consumidos y vendidos con referencias verificables. La captura manual de importe no se presenta como factura.

### D14 · Conteos, ajustes y cierre — P1

- **Pregunta:** ¿quién captura, aprueba, revisa y reabre? ¿Qué pasa si el saldo cambió durante el conteo?
- **Propuesta a evaluar:** conteos con instante/versión, solicitudes de ajuste, segregación de personas y aprobación condicionada; cierre con estados de revisión.
- **Deciden:** gerencia, auditoría, operaciones y finanzas.
- **Cierre:** rechazar saldo obsoleto, registrar actor/motivo/antes/después y no compensar entre SKUs sin un documento autorizado.

### D15 · Protocolo de integración SAE/POS — P2

- **Pregunta:** ¿qué versión, permisos, interfaces soportadas y frecuencia de sincronización existen?
- **Propuesta a evaluar:** adaptador con identificadores externos, mapeos y reconciliación; elegir API, archivos u otro mecanismo sólo después de verificar soporte.
- **Deciden:** responsable SAE, integraciones e infraestructura.
- **Cierre:** integración de prueba autorizada con manejo de duplicados, fallas parciales y reversión. No escribir directamente bases ajenas sin contrato técnico aprobado.

### D16 · Conectividad, lectores e impresión — P2

- **Pregunta:** ¿qué dispositivos, sufijos, formatos de etiqueta y limitaciones de red habrá?
- **Propuesta a evaluar:** homologar hardware; diseñar foco y confirmación de lecturas; decidir si puede capturarse borrador sin red. La confirmación de inventario exige una estrategia explícita de consistencia.
- **Deciden:** infraestructura, almacén, frontend y backend.
- **Cierre:** probar lectura/impresión, cortes y recuperación con equipos reales; mostrar “pendiente de sincronizar” cuando no hay confirmación.

### D17 · IA y analítica — P2

- **Pregunta:** ¿qué decisiones asistirá la IA y qué datos tendrá autorizados?
- **Propuesta a evaluar:** empezar por recomendaciones explicables con evidencia y revisión humana; medir calidad con datos autorizados. Las acciones operativas usan los mismos permisos y comandos que la UI.
- **Deciden:** dirección, producto, datos y seguridad.
- **Cierre:** definir proveedor, costos, privacidad, evaluación, frescura del dato y límites de acción. No llamar IA a las reglas locales ni tratar una recomendación como movimiento confirmado.

### D18 · Colorimetría y equipo — P2

- **Pregunta:** ¿qué sistemas, pigmentos, lotes, instrumentos, tolerancias y protocolos se usarán?
- **Propuesta a evaluar:** receta física autorizada y medición independiente de la previsualización RGB. Conectar equipos mediante un adaptador verificado con confirmaciones y manejo de error.
- **Deciden:** responsable técnico de color, calidad y proveedor del equipo.
- **Cierre:** aprobación de probeta, unidades/calibración verificadas, versión de receta y validación de comandos. No estimar ΔE ni dosificar desde un HEX.

### D19 · Despliegue, operación y recuperación — P2

- **Pregunta:** ¿dónde se alojará, quién operará y qué pérdida/tiempo de recuperación se tolera?
- **Propuesta a evaluar:** separar ambientes, respaldos y restauración probada; observabilidad con correlación de comandos y alertas accionables.
- **Deciden:** dirección, infraestructura y arquitectura.
- **Cierre:** objetivos de recuperación acordados, prueba de restauración y procedimiento para conciliación tras indisponibilidad.

### D20 · Migración y documentación operativa — P2

- **Pregunta:** ¿qué datos se migran y cómo se valida que cada usuario pueda operar?
- **Propuesta a evaluar:** catálogo homologado, inventario de corte, mapeos y conciliación firmada; piloto CEDIS/una tienda y capacitación por puesto.
- **Deciden:** operaciones, datos, QA y dirección.
- **Cierre:** saldos de arranque aprobados, discrepancias resueltas, permisos probados y manual actualizado. No importar capturas de pantalla como saldos vigentes.

## 3. Formato para aprobar una decisión

```text
ID: Dxx
Estado: propuesta | aprobada | sustituida
Responsable y aprobadores:
Pregunta concreta:
Alternativas evaluadas:
Decisión y motivo:
Reglas de negocio afectadas:
Contratos / pantallas afectadas:
Pruebas y evidencia de aceptación:
Fecha y revisión siguiente:
```

Registrar las decisiones en el repositorio y enlazarlas a cambios de código. Si una decisión es sustituida, conservar la referencia anterior para explicar su evolución.
