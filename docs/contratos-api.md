# Contratos de integración propuestos

[Volver al manual](../README.md)

**Ningún endpoint de este documento está implementado en el prototipo.** Es una propuesta para acordar frontend, dominio y backend. Los nombres, estados y rutas pueden cambiar al aprobar las decisiones; mantener una versión de contrato compartida.

## 1. Convenciones a validar

| Aspecto | Propuesta |
|---|---|
| Prefijo | `/api/v1` |
| Identidad | Sesión autenticada; usuario y permisos obtenidos en servidor |
| Identificadores | IDs opacos estables; folios legibles como atributos aparte |
| Cantidades | Cadenas decimales con unidad explícita; política de precisión por unidad |
| Dinero | Cadena decimal + moneda; importe no implica factura |
| Fecha | Instante con zona/UTC para eventos; fecha operativa separada |
| Concurrencia | `expectedVersion` o equivalente acordado para comandos sensibles |
| Idempotencia | `Idempotency-Key` por intención de confirmación; mismo payload reutiliza resultado |
| Lecturas | `clientEventId` por lectura; reenvío del mismo evento no incrementa dos veces |
| Auditoría | Actor real, alcance, evento, folio, correlación y resultado registrados por servidor |
| Listas | Filtros por alcance + paginación por cursor y hora de actualización |

El frontend puede enviar la ubicación deseada, pero el servidor verifica que está dentro del alcance. `actorId`, aprobador y permisos no se aceptan como una afirmación confiable del cliente.

## 2. Consultas y comandos por dominio

| Intención | Ruta propuesta | Confirmación esperada |
|---|---|---|
| Conocer sesión | `GET /me` | Actor, permisos, sucursales autorizadas |
| Resumen de tienda | `GET /branches/{id}/summary` | Indicadores y `asOf` |
| Resolver código | `POST /barcodes/resolve` | Tipo de entidad, ID y referencia legible |
| Existencias | `GET /inventory/balances` | SKU/presentación/unidad/ubicación, físico/reservado/disponible y versión |
| Crear solicitud | `POST /supply-requests` | Solicitud pendiente con folio |
| Autorizar solicitud | `POST /supply-requests/{id}/authorize` | Traslado vinculado y reserva confirmada |
| Instruir traslado central | `POST /transfers` | Cabecera/renglones/reservas autorizadas |
| Iniciar picking | `POST /transfers/{id}/picking-sessions` | Sesión, líneas y versión |
| Registrar lectura de surtido | `POST /picking-sessions/{id}/scans` | Evento aceptado y acumulado |
| Confirmar salida | `POST /transfers/{id}/dispatch` | Despacho, movimiento y tránsito |
| Consultar folio | `GET /transfers/{id}` | Estado/renglones/pendientes dentro del alcance |
| Iniciar recepción | `POST /shipments/{id}/receipt-sessions` | Sesión de recepción y pendientes |
| Leer recepción | `POST /receipt-sessions/{id}/scans` | Lectura, contador y versión |
| Confirmar recepción | `POST /receipt-sessions/{id}/confirm` | Recibo, entradas y diferencias |
| Resolver diferencia | `POST /discrepancies/{id}/resolutions` | Resolución autorizada y movimientos compensatorios |
| Abrir presentación | `POST /opening-orders` | Envases consumidos y stock abierto con genealogía |
| Ordenar reenvasado | `POST /production-orders` | Orden con componentes y factores versionados |
| Confirmar producción | `POST /production-orders/{id}/confirm` | Entradas/salidas/merma y balance |
| Registrar igualación | `POST /color-jobs` | Trabajo técnico con estado comercial separado |
| Registrar consumo físico | `POST /color-jobs/{id}/consumptions` | Componentes/lotes y movimientos autorizados |
| Vincular venta | `POST /color-jobs/{id}/sale-links` | Referencia comercial verificada |
| Crear compra | `POST /purchase-orders` | Orden al proveedor con renglones |
| Recibir compra | `POST /purchase-orders/{id}/receipts` | Recibo independiente y pendientes |
| Capturar conteo | `POST /counts` | Conteo y solicitud de ajuste, sin alterar saldo |
| Aprobar ajuste | `POST /adjustments/{id}/approve` | Movimiento condicionado por versión/permiso |
| Enviar cierre | `POST /daily-closings` | Cierre enviado para revisión |
| Revisar cierre | `POST /daily-closings/{id}/reviews` | Resultado, observaciones y responsable |
| Abrir/atender caso | `POST /cases` / `POST /cases/{id}/transitions` | Caso e historial de seguimiento |

En producción, las acciones de cancelar, rechazar, devolver, anular lectura y reabrir cierre requieren contrato y autorización específicos. No deben resolverse mediante un `DELETE` que borre el documento o mediante edición libre del estado.

## 3. Resolver un código

Petición propuesta:

```json
{
  "value": "PJM-DEMO-001",
  "context": "receipt",
  "shipmentId": "shipment-demo-01"
}
```

Respuesta propuesta para una referencia:

```json
{
  "data": {
    "entityType": "presentation",
    "entityId": "presentation-demo-01",
    "sku": "DEMO-AC024",
    "description": "Colador de papel",
    "unit": "PZA",
    "barcodeType": "internal-reference"
  },
  "meta": { "requestId": "request-demo-01" }
}
```

La resolución del código no mueve inventario. El servidor puede identificar `transfer`, `shipment`, `lot` o `serial` si se aprueba esa política; el contexto determina si el tipo identificado es aceptable en la tarea.

## 4. Registrar una lectura

```json
{
  "clientEventId": "scan-demo-unique-01",
  "code": "PJM-DEMO-001",
  "quantity": "1",
  "unit": "PZA",
  "expectedVersion": 4
}
```

```json
{
  "data": {
    "receiptSessionId": "receipt-session-demo-01",
    "acceptedEventId": "scan-demo-unique-01",
    "lineId": "transfer-line-demo-01",
    "scannedQuantity": "2",
    "pendingShipmentQuantity": "3",
    "unit": "PZA",
    "version": 5
  },
  "meta": { "requestId": "request-demo-02" }
}
```

- La cantidad escaneada pertenece a la sesión; todavía no es una entrada definitiva al inventario.
- La confirmación usa las lecturas validadas del servidor, no un total arbitrario enviado por la pantalla.
- Un `clientEventId` ya procesado devuelve su resultado conocido. La política exacta de versión en ese caso se define con D04.
- Dos lecturas diferentes del mismo SKU son válidas si la cantidad esperada lo permite. Detectar el mismo envase dos veces requiere serialización o controles adicionales.
- Una lectura del tipo equivocado o de un producto ajeno no modifica el contador.

## 5. Confirmar un parcial

Ruta: `POST /receipt-sessions/{id}/confirm`.

Cabecera propuesta: `Idempotency-Key: command-demo-unique-01`.

```json
{
  "expectedVersion": 5,
  "observation": "Se recibieron dos de las tres piezas despachadas."
}
```

```json
{
  "data": {
    "receiptId": "receipt-demo-01",
    "transferId": "transfer-demo-01",
    "status": "in_transit_with_discrepancy",
    "receivedNow": "2",
    "receivedTotal": "2",
    "remainingInTransit": "1",
    "unit": "PZA",
    "discrepancyId": "discrepancy-demo-01",
    "version": 6
  },
  "meta": { "requestId": "request-demo-03" }
}
```

El actor de recepción se deriva de la sesión autenticada. Si el negocio requiere un nombre de quien recibió físicamente además del actor digital, se captura como dato adicional y se conserva su relación, sin sustituir la identidad autenticada.

La implementación debe adaptar esta respuesta a múltiples renglones. Este ejemplo de una línea explica la regla y no prescribe el documento final.

## 6. Errores que la UX debe distinguir

| HTTP propuesto | Código de negocio | Significado | UX esperada |
|---|---|---|---|
| 400 | `INVALID_INPUT` | Formato o unidad de cantidad inválidos | Corregir campo señalado |
| 401 | `SESSION_REQUIRED` | Sesión ausente/expirada | Recuperar sesión; conservar borrador según política |
| 403 | `SCOPE_DENIED` | Acción o sucursal no permitida | Volver al alcance propio sin mostrar información ajena |
| 404 | `ENTITY_NOT_FOUND` | Identificador desconocido dentro del alcance | Revisar código/folio |
| 409 | `INSUFFICIENT_AVAILABLE` | Stock comprometido por otro movimiento | Actualizar y revisar reposición |
| 409 | `VERSION_CONFLICT` | Documento o saldo cambió | Mostrar cambio y pedir revisión |
| 409 | `IDEMPOTENCY_PAYLOAD_MISMATCH` | Misma clave para otra intención | Recuperar estado; no ejecutar una operación nueva |
| 422 | `BARCODE_ENTITY_MISMATCH` | Código del tipo equivocado para la tarea | Explicar folio frente a producto |
| 422 | `PRODUCT_NOT_IN_ORDER` | Referencia ajena a la orden | No sumar; conservar foco |
| 422 | `QUANTITY_EXCEEDS_PENDING` | Lectura mayor al pendiente | Mostrar pendiente vigente |
| 422 | `DISPATCH_NOT_READY` | Picking incompleto o no validado | Volver a surtido |
| 422 | `DISCREPANCY_REASON_REQUIRED` | Falta explicación de parcial | Capturar observación |
| 422 | `PRODUCT_DISCONTINUED` | Nueva orden de producto bloqueado | Mostrar política y alternativa autorizada |
| 422 | `TRANSFORMATION_UNBALANCED` | Balance/tolerancia no aceptado | Revisar insumos, salidas y merma |
| 503 | `DEPENDENCY_UNAVAILABLE` | Servicio requerido no disponible | Explicar estado y consultar/reintentar según comando |

Formato propuesto:

```json
{
  "error": {
    "code": "VERSION_CONFLICT",
    "message": "El saldo cambió desde el conteo. Revisa el conteo antes de aprobar.",
    "retryable": false,
    "details": { "currentVersion": 9 }
  },
  "meta": { "requestId": "request-demo-04" }
}
```

No enviar datos sensibles de otras sucursales ni detalles internos del sistema en errores de permiso.

## 7. Confirmación y recuperación

1. El frontend crea una clave por intención de confirmación y la conserva mientras el resultado sea incierto.
2. El backend registra resultado, movimiento, auditoría e identificador de comando en una transacción consistente.
3. La publicación hacia SAE u otros destinos usa un mecanismo recuperable, como outbox, si la arquitectura elegida lo requiere.
4. Ante timeout, el frontend consulta `GET /commands/{id}` o el mecanismo acordado. No presume éxito ni falla.
5. Un reintento de la misma intención reutiliza clave y payload. Un cambio de cantidad constituye una intención distinta y exige revisión.
6. Si la respuesta final es asíncrona, se define estado `pending`, consulta de seguimiento y momento exacto en que el saldo queda confirmado.

Retención de claves, caducidad de sesiones de lectura y resolución de comandos atascados son parte de D04 y D19.

## 8. Contrato específico de color

- Una referencia visual `HEX/RGB` no es un componente dosificable.
- Una receta física identifica sistema, versión, componentes, unidad y lotes/compatibilidades aprobadas.
- La masa total y el volumen total no son intercambiables sin datos de densidad y condiciones aceptadas.
- Preparación simulada, orden de producción y comando a máquina son entidades/acciones separadas.
- Enviar a equipo requiere permiso específico, receta liberada, adaptador verificado y confirmación del equipo; un envío aceptado no implica que la mezcla se produjo correctamente.
- La aprobación de probeta y el control de calidad se registran como hechos propios.

No implementar un endpoint que convierta un color HEX en una fórmula real o en un comando de hardware sin el modelo técnico y la validación necesarios.
