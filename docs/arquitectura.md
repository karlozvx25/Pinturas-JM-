# Arquitectura, dependencias y carriles

[Volver al manual](../README.md)

Este documento distingue **lo que ejecuta el prototipo** de una **propuesta para el sistema definitivo**. Los componentes backend y las entidades propuestas todavía no existen en este repositorio.

## 1. Arquitectura actual

La aplicación es estática y ejecuta toda la lógica dentro de una sesión de navegador. Cualquier proveedor HTTP de archivos estáticos puede servir `dist/`.

```mermaid
flowchart TB
  subgraph L1[Carril de usuario]
    TI[Administrador de tienda]
    CE[Central o Gerencia]
  end
  subgraph L2[Carril de presentación]
    SHELL[store.js: navegación final por puesto]
    INV[Inventario y recepción]
    OPS[Compras, producción, igualación y control]
    LAB[Atelier RGB]
  end
  subgraph L3[Carril de lógica local]
    FUN[Funciones globales de dominio]
    RULE[Asistente por reglas]
    BAR[JsBarcode Code 128]
  end
  subgraph L4[Carril de persistencia y salida]
    DB[(localStorage por origen)]
    PRINT[Diálogo de impresión]
  end
  TI --> SHELL
  CE --> SHELL
  SHELL --> INV
  SHELL --> OPS
  SHELL --> LAB
  INV --> FUN
  OPS --> FUN
  LAB --> RULE
  FUN <--> DB
  RULE --> FUN
  INV --> BAR
  BAR --> PRINT
```

### Orden y dependencia de las capas

```mermaid
flowchart LR
  H[index.html: estado, vistas y utilidades iniciales] --> A[atelier.js: visualización y creatividad]
  A --> O[operations.js: dominio comercial]
  O --> S[store.js: experiencia final y guardas de recepción]
  J[JsBarcode vendorizado] --> S
  C[CSS base, atelier, operations y store] --> S
```

- Los scripts clásicos comparten ámbito global. Cargar un archivo aislado no reproduce la aplicación completa.
- `operations.js` crea el catálogo comercial y `ops`; `store.js` agrega las solicitudes de tienda y redefine la recepción para exigir lectura.
- El modelo inicial `state` y el modelo comercial `ops` coexisten. No hay un único catálogo consolidado entre el atelier y el inventario comercial.
- Las etiquetas se generan como SVG. La entrada por lector se representa como texto seguido de Enter; la demo no verifica un dispositivo físico.
- Las reglas y la bitácora locales son modificables desde el navegador. No hay integridad de servidor.
- La navegación final elimina las vistas de guion y levantamiento. Las definiciones heredadas no son módulos productivos vigentes.

## 2. Arquitectura propuesta por carriles

**Propuesta inicial para evaluar:** un backend con dominios separados y una base transaccional. El despliegue y el proveedor de infraestructura deberán decidirse después de conocer SAE, conectividad, operación y requerimientos de recuperación.

```mermaid
flowchart TB
  subgraph P1[Carril de personas y equipos]
    U1[Tiendas: administrador, cajero e igualador]
    U2[CEDIS: almacén, compras y producción]
    U3[Gerencia, auditoría y telemarketing]
    EQ[Lectores e impresoras homologados]
  end
  subgraph P2[Carril de experiencia]
    FE[Frontend por tarea y alcance]
    SC[Adaptador de lectura e impresión]
  end
  subgraph P3[Carril de acceso y contratos]
    AUTH[Identidad y sesión]
    API[API de consultas y comandos]
    POLICY[Permisos y alcance por sucursal]
  end
  subgraph P4[Carril de dominios]
    CAT[Catálogo y unidades]
    INV[Inventario y reservas]
    LOG[Solicitudes y distribución]
    PROD[Apertura y reenvasado]
    COLOR[Igualación y fórmulas]
    CRM[Casos y seguimiento]
    CLOSE[Cierres y ajustes]
  end
  subgraph P5[Carril de datos y procesos]
    SQL[(Base transaccional)]
    AUD[(Auditoría protegida)]
    OUT[Eventos de integración / outbox]
    JOB[Procesos de sincronización]
  end
  subgraph P6[Carril de integraciones por verificar]
    SAE[Aspel SAE e interfaz actual]
    POS[POS y facturación]
    BI[Analítica]
    AI[IA opcional con autorización]
    HW[Espectrofotómetro o dosificadora]
  end
  U1 --> FE
  U2 --> FE
  U3 --> FE
  EQ <--> SC
  SC <--> FE
  FE --> AUTH
  FE --> API
  AUTH --> POLICY
  API --> POLICY
  POLICY --> CAT
  POLICY --> INV
  POLICY --> LOG
  POLICY --> PROD
  POLICY --> COLOR
  POLICY --> CRM
  POLICY --> CLOSE
  LOG --> INV
  PROD --> INV
  COLOR --> INV
  CLOSE --> INV
  CAT --> SQL
  INV --> SQL
  LOG --> SQL
  PROD --> SQL
  COLOR --> SQL
  CRM --> SQL
  CLOSE --> SQL
  API --> AUD
  SQL --> OUT
  OUT --> JOB
  JOB <--> SAE
  JOB <--> POS
  JOB --> BI
  API --> AI
  COLOR -. Adaptador pendiente .-> HW
```

Las líneas hacia SAE, POS, IA y equipos representan necesidades de integración, no capacidades confirmadas. La autorización debe aplicarse antes de ejecutar reglas o consultar datos, incluidas las consultas del asistente.

## 3. Usuarios y límites de acceso

### Carriles de responsabilidad

```mermaid
flowchart LR
  subgraph Tienda[Carril de tienda]
    ADM[Administrador: tareas y cierre]
    REC[Receptor: lectura y recepción]
    IG[Igualador: trabajo y receta]
    CAJ[Cajero: venta y ticket]
  end
  subgraph Cedis[Carril de central]
    COO[Coordinador: distribución]
    ALM[Almacenista: surtido y salida]
    COM[Compras: proveedor y entradas]
    PRO[Producción: reenvasado]
  end
  subgraph Control[Carril de revisión]
    GER[Gerencia: autorizaciones]
    AUD[Auditor: evidencia y conciliación]
    TEL[Telemarketing: incidencias]
  end
  ADM --> COO
  COO --> ALM
  ALM --> REC
  COM --> PRO
  PRO --> ALM
  IG --> CAJ
  ADM --> GER
  REC --> TEL
  GER --> AUD
```

### Matriz propuesta de permisos

Leyenda: **P** = proponer/capturar; **E** = ejecutar; **A** = aprobar; **L** = leer dentro del alcance autorizado; **—** = no previsto por defecto. Esta matriz requiere aprobación del negocio.

| Acción | Admin tienda | Almacén | Coordinación | Compras | Producción | Igualador | Gerencia | Telemarketing |
|---|---|---|---|---|---|---|---|---|
| Existencias | L propia | L CEDIS | L red | L red | L insumos | L propia | L red | L acotada |
| Solicitar producto | P propia | — | P/E | — | P insumos | P propia | L | P caso |
| Autorizar distribución | — | — | A | — | — | — | A | — |
| Picking | — | E origen | L | — | — | — | L | — |
| Despachar | — | E autorizado | A/E | — | — | — | L | — |
| Recibir traslado | E propia | E CEDIS | L | — | — | — | L | L incidencia |
| Recibir proveedor | — | E físico | L | A/E documental | — | — | L | — |
| Ejecutar reenvasado | — | — | L | L | E | — | A excepciones | — |
| Fórmula/igualación | L propia | — | L | — | L | P/E propia | A política | L caso |
| Conteo | P propia | P CEDIS | L | — | P insumos | P asignado | L | — |
| Aprobar ajuste | — | — | — | — | — | — | A | — |
| Cierre | P propia | P ámbito | L | — | P producción | P trabajo | A revisión | — |
| Resolver caso | P evidencia | P evidencia | E logística | E proveedor | E producción | E técnica | A excepción | E seguimiento |

**Identidad propuesta:** usuario autenticado + puestos asignados + conjunto de sucursales autorizadas + permisos de acción. `branchId` enviado por el frontend nunca amplía ese conjunto. La autorización se valida tanto en consultas como en comandos y archivos descargables.

La separación de quien captura y quien aprueba debe definirse por persona real. En la demo es posible cambiar un selector y realizar ambas tareas; eso no cumple segregación de funciones.

## 4. Modelo de información propuesto

```mermaid
erDiagram
  BRANCH ||--o{ STOCK_BALANCE : contiene
  PRODUCT ||--o{ PRESENTATION : tiene
  PRESENTATION ||--o{ BARCODE : identifica
  PRESENTATION ||--o{ STOCK_BALANCE : cuantifica
  LOT ||--o{ STOCK_BALANCE : detalla
  USER ||--o{ USER_SCOPE : recibe
  BRANCH ||--o{ USER_SCOPE : limita
  TRANSFER ||--|{ TRANSFER_LINE : incluye
  PRESENTATION ||--o{ TRANSFER_LINE : mueve
  TRANSFER_LINE ||--o{ RESERVATION : reserva
  TRANSFER ||--o{ SHIPMENT : despacha
  SHIPMENT ||--o{ RECEIPT : recibe
  RECEIPT ||--|{ RECEIPT_LINE : detalla
  TRANSFER_LINE ||--o{ RECEIPT_LINE : concilia
  STOCK_MOVEMENT ||--|{ STOCK_MOVEMENT_LINE : asienta
  STOCK_BALANCE ||--o{ STOCK_MOVEMENT_LINE : afecta
  PRODUCTION_ORDER ||--|{ PRODUCTION_COMPONENT : consume
  PRODUCTION_ORDER ||--o{ PRODUCTION_OUTPUT : produce
  LOT ||--o{ PRODUCTION_COMPONENT : origen
  LOT ||--o{ PRODUCTION_OUTPUT : resultado
  COLOR_JOB ||--o{ COLOR_CONSUMPTION : utiliza
  COLOR_JOB }o--o| SALE : vincula
  COUNT ||--o| ADJUSTMENT : solicita
  USER ||--o{ AUDIT_EVENT : actua
```

### Límites de las entidades

| Concepto | Identifica | No debe confundirse con |
|---|---|---|
| Producto | Identidad comercial/técnica | Cada presentación o cada lote |
| Presentación | Cantidad y unidad comercial, factor autorizado | Código genérico que agrupa colores diferentes |
| Código de barras | Alias resoluble de una entidad y tipo | Garantía de origen, número de serie o evidencia de recepción |
| Lote | Procedencia/producción y atributos trazables | Saldo total de un SKU |
| Reserva | Compromiso de disponibilidad | Descuento físico ya despachado |
| Movimiento | Hecho confirmado de entrada/salida/transformación | Edición directa de un contador |
| Tránsito | Cantidad despachada pendiente de destino o resolución | Merma ya reconocida |
| Trabajo de color | Producción e información técnica | Venta cobrada o factura emitida |
| Caso | Seguimiento de una necesidad o incidencia | Autorización para cambiar inventario |

El esquema definitivo de ubicaciones, almacenes virtuales, lotes y contabilidad de movimientos depende de la fuente de verdad acordada con SAE.

## 5. Estados y carriles críticos

### Traslado

```mermaid
stateDiagram-v2
  [*] --> Solicitado: Autorización y reserva
  Solicitado --> EnSurtido: Primera lectura válida
  EnSurtido --> EnSurtido: Lecturas dentro de cantidad
  EnSurtido --> EnTransito: Picking exacto y despacho
  EnTransito --> EnTransito: Recepción parcial con diferencia
  EnTransito --> Conciliado: Recibido acumulado igual a enviado
  Conciliado --> [*]
```

Este es el flujo demostrado. Cancelación, rechazo, liberación de reserva, daño, devolución y pérdida requieren estados o documentos compensatorios aprobados. No deben implementarse borrando el traslado.

### Recepción parcial por carriles

```mermaid
sequenceDiagram
  participant R as Receptor de tienda
  participant UI as Pantalla de recepción
  participant API as Recepción backend propuesto
  participant INV as Inventario
  participant C as Central
  R->>UI: Leer folio
  UI->>API: Consultar entrega en alcance de sesión
  API-->>UI: Renglones, pendiente y versión
  R->>UI: Leer productos realmente recibidos
  UI->>API: Registrar lecturas con identificador de evento
  API-->>UI: Contador confirmado
  R->>UI: Confirmar parcial con observación
  UI->>API: Comando idempotente de recepción
  API->>INV: Entrada parcial y disminución de tránsito
  API-->>UI: Recibo, cantidades y versión nueva
  API-->>C: Diferencia pendiente de aclarar
  UI-->>R: Confirmación y pendiente visible
```

### Ajuste por conteo

```mermaid
sequenceDiagram
  participant T as Tienda o almacén
  participant API as Backend propuesto
  participant G as Gerencia
  participant INV as Inventario
  participant AU as Auditoría
  T->>API: Conteo con referencia, saldo observado y motivo
  API-->>G: Solicitud de ajuste pendiente
  G->>API: Aprobar con identidad y versión
  API->>INV: Verificar saldo vigente y reservas
  alt Conteo vigente y autorización válida
    API->>INV: Movimiento de ajuste en transacción
    API->>AU: Actor, motivo, antes y después
    API-->>G: Ajuste confirmado
  else Conflicto o cambio de saldo
    API-->>G: Bloqueo, requiere revisión o nuevo conteo
  end
```

## 6. Dependencias entre dominios

```mermaid
flowchart LR
  ID[Identidad y alcance] --> CAT[Catálogo]
  ID --> INV[Inventario]
  CAT --> INV
  CAT --> COD[Códigos y etiquetas]
  INV --> RES[Reservas]
  RES --> LOG[Traslados y recepciones]
  CAT --> CMP[Compras]
  CMP --> INV
  INV --> PRD[Apertura y producción]
  PRD --> COL[Igualación]
  COL --> VTA[Conciliación con venta]
  LOG --> CLS[Cierres y control]
  VTA --> CLS
  CLS --> ADJ[Ajustes autorizados]
  ADJ --> INV
  LOG --> CRM[Casos]
  PRD --> CRM
  COL --> CRM
```

La implementación puede agrupar dominios en un mismo servicio inicial, conservando sus contratos y transacciones. La división en procesos o despliegues independientes debe justificarse por requisitos medidos.

## 7. Integridad operativa que debe diseñarse

- **Reserva concurrente:** dos tiendas no pueden comprometer la misma disponibilidad más allá del saldo permitido.
- **Transacción de despacho:** estado, movimiento y auditoría se confirman juntos.
- **Recepción idempotente:** repetir la confirmación tras perder conexión devuelve el mismo resultado.
- **Lecturas distintas:** una lectura real adicional tiene un evento nuevo; un reenvío de la misma lectura conserva el mismo identificador.
- **Auditoría:** la aplicación no permite editar o eliminar eventos para hacer coincidir saldos.
- **SAE:** los comandos locales y los externos se correlacionan para detectar duplicados, fallas y retrasos.
- **Fecha operativa:** distinguir hora de evento, zona horaria y fecha de cierre de negocio.
- **Precisión:** definir cantidades decimales y tolerancias por unidad; no usar flotantes de JavaScript como política de saldo productivo.
- **Recuperación:** definir respaldo, restauración, colas pendientes y conciliación posterior a fallos.

Estas condiciones se formalizan en [contratos](contratos-api.md) y [decisiones](decisiones-backend.md).
