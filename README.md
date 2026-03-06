#  Proyecto TypeScript: Agencia de Turismo

##  Dominio

Este proyecto modela una **Agencia de Turismo** utilizando TypeScript.
La aplicación permite representar y gestionar información básica relacionada con:

* Destinos turísticos
* Guías turísticos
* Paquetes turísticos
* Reservas realizadas por clientes

El objetivo es aplicar conceptos fundamentales de **TypeScript** como interfaces, tipos literales, uniones de tipos y funciones tipadas.

---

#  Entidades Principales

El sistema está compuesto por las siguientes entidades:

### Destination

Representa un destino turístico disponible para los paquetes.

Propiedades principales:

* id
* name
* country
* type

---

### TourGuide

Representa un guía turístico que puede acompañar los tours.

Propiedades principales:

* id
* name
* languages
* rating

---

### TourPackage

Representa un paquete turístico que incluye un destino, precio y duración.

Propiedades principales:

* id
* title
* price
* durationDays
* destination

---

### Reservation

Representa una reserva realizada por un cliente para un paquete turístico.

Propiedades principales:

* id
* clientName
* tourPackage
* status

---

#  Decisiones de Modelado

Para desarrollar el proyecto se tomaron las siguientes decisiones:

* Se utilizaron **interfaces** para modelar las entidades principales del dominio.
* Se utilizaron **type literals y type unions** para restringir valores válidos en el sistema.

Ejemplos:

Estados de reserva:

* pending
* confirmed
* cancelled

Tipos de destino:

* beach

* mountain

* city

* adventure

* Se implementaron **funciones tipadas** para realizar operaciones sobre los datos.

* Se utilizó **Partial<T>** como *utility type* para permitir actualizaciones parciales de un paquete turístico.

---

#  Funciones Implementadas

### applyDiscount

Calcula el precio de un paquete turístico aplicando un porcentaje de descuento.

Parámetros:

* price
* discount

Retorna el nuevo precio con descuento aplicado.

---

### updateReservationStatus

Permite actualizar el estado de una reserva.

Parámetros:

* reservation
* newStatus

Retorna la reserva con el estado actualizado.

---

#  Estructura del Proyecto

```
PROJECT_1-MAIN
│
├── node_modules
│
├── starter
│   └── index.ts
│
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

Descripción:

* **starter/index.ts** → archivo principal donde se implementa el proyecto
* **package.json** → configuración del proyecto y dependencias
* **tsconfig.json** → configuración de TypeScript
* **README.md** → documentación del proyecto

---

#  Cumplimiento de Requisitos

El proyecto cumple con los criterios solicitados:

✔ Modelado de entidades del dominio
✔ Uso de interfaces y types
✔ Uso de type union y type literal
✔ Funciones con tipos explícitos
✔ Uso de utility type (`Partial`)
✔ Código comentado con **qué / para / impacto**
✔ Código organizado y ejecutable

---

#  Ejecución del Proyecto

Para ejecutar el proyecto:

```bash
pnpm install
pnpm start
pnpm run dev
```

Esto ejecutará el archivo principal y mostrará los resultados en la consola.

---

#  Autor
**Eliana Vannesa Cortes Quiroga**






