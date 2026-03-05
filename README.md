#  Proyecto: Agencia de Turismo

##  Dominio

El proyecto modela una Agencia de Turismo que gestiona:

- Destinos turísticos
- Guías turísticos
- Paquetes turísticos
- Reservas de clientes

##  Decisiones de Modelado

- Se utilizaron **interfaces** para modelar entidades principales:
  - Destination
  - TourGuide
  - TourPackage
  - Reservation

- Se utilizaron **type literals y unions** para:
  - Estados de reserva (`pending`, `confirmed`, `cancelled`)
  - Tipos de destino (`beach`, `mountain`, `city`, `adventure`)

- Se implementaron funciones tipadas para:
  - Aplicar descuentos
  - Actualizar estado de reservas

- Se utilizó `Partial<T>` como utility type para permitir actualizaciones parciales.

##  Cumplimiento de Requisitos

✔ Interfaces y types definidos  
✔ Uso de type union y type literal  
✔ Funciones con tipos explícitos  
✔ Uso de utility type  
✔ Código comentado con qué/para/impacto  
✔ Proyecto compila y ejecuta correctamente  

##  Ejecución

```bash
pnpm install
pnpm start

## Autor
- Eliana Vannesa Cortes Quiroga
