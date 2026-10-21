# Pinturas JM · adecuación del prototipo

Fuente: siete videos y fotografía aportados para la sesión de levantamiento. Revisión visual de todos los videos y transcripción local automática en español. Las transcripciones pueden contener errores; no equivalen a una especificación aprobada. No se incorporan grabaciones, nombres de clientes, datos personales ni información económica del proveedor al sitio.

## Hallazgos y cambios

| Evidencia | Hallazgo operativo | Adecuación |
|---|---|---|
| IMG_5075, 7–146 s y pantalla de inventarios a 63 s | CEDIS identificado como PJM; consulta de existencias por tienda; interfaz para Aspel SAE; solicitudes por ticket | Inventario comercial con clave, marca, línea, presentación, unidad y matriz de sucursales. Datos de demostración separados de saldos reales |
| IMG_5075, 149–363 s | Surtido manual; diferencias solicitud/salida/recepción; interés en lectores; proveedores entregan al CEDIS | Solicitud, picking por código, despacho y recepción parcial con diferencia abierta. No se promete conexión a lectores |
| IMG_5075, 382–577 s; IMG_5076, 0–109 s | Centralización, caducidades, conteos y falta de trazabilidad clara entre interfaz y SAE | Registro de eventos, conteo que genera solicitud de ajuste y aprobación por rol demo; lotes y caducidad en entradas |
| IMG_5076, 153–231 s | Preorden, recepción parcial y pendientes; posible alta de producto durante compra | Compra demo a CEDIS con parciales y alta de referencia en la misma vista |
| IMG_5076, 268–318 s | Campos de marca/medida usados para otros fines y descontinuados manuales | Campos diferenciados y bloqueo de nuevas solicitudes/compras para descontinuados |
| IMG_5076, 373–517 s | Conversión a litros pierde referencia de color; dificulta préstamos entre tiendas | Apertura de envases con factor declarado en litros, conserva SKU, color y lote; traslado entre sucursales dirigido por central |
| IMG_5076, 520–562 s; IMG_5079, 7–42 s | Canal de subdistribuidores y redistribución central | Solicitudes con motivo y reasignación intersucursal; contact center distingue sucursal, cliente clave y subdistribuidor |
| IMG_5079, 47–155 s; IMG_5082, 0–85 s y 302–386 s | Reenvasado central; masas/volúmenes y presentaciones; perlas en gramos | Orden de producción con materia prima y producto terminado; balance por dimensión, conserva remanente y merma explícita. Factores del ejemplo NO son recetas ni presentaciones homologadas |
| IMG_5082, 239–262 s y 428–453 s; hoja visible en IMG_5083–85 | Bitácora manual de igualación, litros, importe, operador y muestras | Bitácora digital de trabajo y cierre diario en litros/MXN. Registros capturados, sin inferir venta desde producción |
| IMG_5083, 0–104 s | Falta de lector en POS y sustituciones de SKU con mismo precio | Lectura de código por entrada de texto demo; rechazo de código ajeno y no sustitución silenciosa. POS/lector real pendiente |
| IMG_5084, 0–126 s | Cierres por sucursal y revisión central al siguiente día | Captura de cierre físico vs sistema por SKU, revisión central de diferencias |
| IMG_5085, 0–86 s | Capacidad de exhibición y reportes que dejaron de actualizar | Reposición demo acotada por mínimo/objetivo/capacidad; fecha del escenario y aviso de que no es Power BI ni pronóstico real |

## Alcance de la implementación

Todos los saldos, códigos DEMO, operadores, lotes, políticas, precios e importes del prototipo son ficticios. Las descripciones de varias familias proceden de lo observado, pero no se importa el inventario fotografiado como saldo actual. Los nombres de sucursales se mantienen numerados; la correspondencia con nombres comerciales se validará con el cliente.

La apertura preserva litros y referencia; no convierte masa en volumen. El reenvasado de masa usa kg y g; el de volumen usa L y mL, sin factores de densidad supuestos. Traspasos y ajustes son movimientos de demostración en este navegador. Los roles ilustran el flujo; no constituyen autenticación ni autorización segura.

Pendientes productivos: exportación autorizada de catálogo y saldos SAE, versión y mecanismo técnico de integración, homologación de unidades y códigos, lotes y caducidad, catálogo de sucursales, políticas de apertura y reenvasado, equipos y protocolos, controles de acceso reales y bitácora de servidor, conciliación contable/fiscal, sistema colorimétrico y validación física. No se promete reemplazar al igualador ni medir coincidencia física desde RGB.
