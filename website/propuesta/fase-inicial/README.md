# Pinturas JM · Prototipo adicional de primera fase

Implementación independiente del prototipo ampliado. Representa el alcance de $1,300,000 MXN + IVA aprobado en la cotización del 3 de noviembre de 2026. Creado el 10 de noviembre de 2026; no modifica precios, pagos, vigencia ni condiciones comerciales.

## Cómo abrirlo

Desde la cotización, usar **Prototipo de $1.3 M + IVA** en el hero o **Abrir prototipo de primera fase** en inversión. Volver a cotización desde la barra lateral. La visión ampliada anterior se conserva por separado.

## Módulos y roles

| Vista | Qué demuestra |
|---|---|
| Centro de control | Resumen básico de disponibilidad, traslados y diferencias, diagrama CEDIS / 11 sucursales. |
| Inventario y códigos | Físico, reserva, disponible y tránsito por presentación/sede; alta central, búsqueda por código, etiquetas Code 128 imprimibles, CSV y kardex. |
| Recepción CEDIS | Referencia documental única, lectura de código, cantidad y lote documental, aumento de saldo físico. |
| Solicitudes y traslados | Solicitud manual → autorización/reserva → surtido por código → despacho → recepción ciega/parcial → resolución auditada. |
| Conteos y ajustes | Conteo no modifica saldo hasta autorización central; rechaza saldo obsoleto y afectación de reservas. |
| Salidas de transición | Captura manual controlada de ventas/consumos del sistema actual con referencia única; rechazo de duplicados. |
| Bitácora | Responsable, hora, acción y referencia; movimientos físicos con antes/después en kardex. |
| Alcance y evolución | Contraste con módulos aplazados y condiciones de mantenimiento ya aprobadas. |

**Central** autoriza reservas, resuelve diferencias, crea catálogo y aprueba ajustes. **Almacén CEDIS** recibe proveedor, surte y despacha. **Tienda** consulta su sede, solicita, acredita sus envíos, registra conteos y salidas de transición. **Supervisión** sólo consulta. El selector de rol/sede es una herramienta de demostración, no autenticación.

## Recorrido verificable

1. Entrar como tienda / Sucursal 01. El traslado TR-0001 está en tránsito.
2. Abrir expediente, leer 750000000001 y capturar 10 presentaciones. No se muestra cantidad enviada en el formulario de recepción ciega. Sólo 10 se acreditan; 2 permanecen como diferencia.
3. Cambiar a central, abrir traslado y resolver diferencia: retorno físicamente confirmado o merma autorizada, con motivo obligatorio. No existe retorno automático sin decisión central.
4. Crear una nueva solicitud; autorizar para reservar. El físico no cambia todavía.
5. Surtir mediante código (un código distinto se rechaza), completar cantidad y despachar. El stock físico baja y el envío pasa a tránsito.
6. Registrar una salida con referencia de origen. Repetir la referencia: se rechaza sin volver a descontar.
7. Registrar conteo como tienda y autorizarlo como central. Si hubo movimientos después del conteo, se exige contar de nuevo.
8. Consultar kardex, etiquetas y bitácora. El botón Restablecer demo recupera el escenario inicial tras confirmación.

## Límites que debe conservar el backend

- `engine.js` realiza cada comando sobre una copia y sólo devuelve un estado nuevo cuando todas sus validaciones pasan. Esto no equivale a una transacción real de base de datos ni a control de concurrencia multiusuario.
- Una solicitud no mueve saldos; autorización reserva; despacho descuenta origen y cambia a tránsito; recepción acredita únicamente lo contado. Recepción cero abre discrepancia total. Reintentos después de una transición ya terminada se rechazan.
- Las cantidades son presentaciones enteras; no se suman litros, gramos ni conversiones de fórmulas. La muestra usa colores sólo como identificación visual.
- La referencia documental se considera única para el movimiento. Para documentos con varias líneas, usar una referencia inequívoca por línea. El backend deberá definir ámbito de unicidad, identidad de comandos y reintentos.
- El kardex de la demo inicia después de saldos ficticios. No es historia de migración real ni evidencia inalterable.
- Se registran lotes documentales de entrada en la bitácora; no se simula asignación FEFO, genealogía de lotes ni transformación.
- Escaneo por entrada de texto/lector tipo teclado. Cámara, impresoras, lectores y códigos reales requieren validación física. JsBarcode Code128 se conserva con su licencia MIT.
- Datos en localStorage con clave `pjm-phase-one-v1`. Cambiar de navegador o borrar almacenamiento altera sólo esta demo. En producción: identidad y permisos en servidor, transacciones, bloqueo/versionado, auditoría persistente, respaldo y conciliación.

## Fuera de esta fase

Laboratorio y fórmulas, dosificadoras, producción/reenvase, kits, POS/mayoreo completos, cortes y crédito, facturación/PAC, reabasto y compras automáticas, GPS/rutas, IA/analítica avanzada, contact center e integración automática SAE/POS. Web institucional incluida de cortesía; catálogo/carrito/pedidos conectados son adicional opcional propuesto en $240,000 + IVA, sin pasarela.

El prototipo no sustituye el desarrollo backend, carga/migración acordada, piloto, capacitación, pruebas de aceptación ni despliegue contratados. No cambia la garantía de 90 días, mantenimiento anual de $180,000 + IVA o dos semestrales de $90,000 + IVA, 15 horas/mes no acumulables ni las condiciones de nube promocional.
