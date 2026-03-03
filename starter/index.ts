// ============================================
//  PROYECTO SEMANAL: AGENCIA DE TURISMO
// ============================================

console.log(' PROYECTO: AGENCIA DE TURISMO\n');

// ============================================
// PASO 1: Type Literals y Unions
// ============================================

// QUÉ: definir tipos literales para estados de reserva
// PARA: limitar los estados posibles
// IMPACTO: evita valores inválidos como "canceladoo"

type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

// QUÉ: tipo literal para tipo de destino
// PARA: limitar categorías de destino
// IMPACTO: más control y seguridad

type DestinationType = 'beach' | 'mountain' | 'city' | 'adventure';

// ============================================
// PASO 2: Interfaces Principales
// ============================================

// QUÉ: modelar un destino turístico
// PARA: representar lugares disponibles
// IMPACTO: estructura clara y reutilizable

interface Destination {
  id: number;
  name: string;
  country: string;
  type: DestinationType;
}

// QUÉ: modelar un guía turístico
// PARA: representar personas que acompañan los tours
// IMPACTO: asegura que todos tengan estructura consistente

interface TourGuide {
  id: number;
  name: string;
  languages: string[];
  rating: number;
}

// QUÉ: modelar un paquete turístico
// PARA: agrupar destino, precio y duración
// IMPACTO: facilita gestión de ofertas

interface TourPackage {
  id: number;
  title: string;
  price: number;
  durationDays: number;
  destination: Destination;
}

// QUÉ: modelar una reserva
// PARA: registrar qué cliente reservó qué paquete
// IMPACTO: control de ventas y estados

interface Reservation {
  id: number;
  clientName: string;
  tourPackage: TourPackage;
  status: ReservationStatus;
}

// ============================================
// PASO 3: Datos de Ejemplo
// ============================================

const cartagena: Destination = {
  id: 1,
  name: 'Cartagena',
  country: 'Colombia',
  type: 'beach',
};

const guide1: TourGuide = {
  id: 1,
  name: 'Carlos Pérez',
  languages: ['Spanish', 'English'],
  rating: 4.8,
};

const package1: TourPackage = {
  id: 1,
  title: 'Escapada a Cartagena 4 días',
  price: 1200,
  durationDays: 4,
  destination: cartagena,
};

const reservation1: Reservation = {
  id: 1,
  clientName: 'Ana García',
  tourPackage: package1,
  status: 'pending',
};

console.log('Destino:', cartagena);
console.log('Guía:', guide1);
console.log('Paquete:', package1);
console.log('Reserva:', reservation1);

console.log('');

// ============================================
// PASO 4: Funciones Tipadas
// ============================================

// QUÉ: calcular precio con descuento
// PARA: aplicar promociones
// IMPACTO: reutilizable y segura en tipos

const applyDiscount = (price: number, discount: number): number => {
  return price - price * (discount / 100);
};

console.log(
  'Precio con 10% descuento:',
  applyDiscount(package1.price, 10),
);

// QUÉ: cambiar estado de reserva
// PARA: actualizar estado cuando cliente paga o cancela
// IMPACTO: solo permite estados válidos

const updateReservationStatus = (
  reservation: Reservation,
  newStatus: ReservationStatus,
): Reservation => {
  return { ...reservation, status: newStatus };
};

const updatedReservation = updateReservationStatus(
  reservation1,
  'confirmed',
);

console.log('Reserva actualizada:', updatedReservation);

console.log('');

// ============================================
// PASO 5: Utility Type
// ============================================

// QUÉ: crear tipo para actualizar parcialmente un paquete
// PARA: permitir actualizar solo algunos campos
// IMPACTO: evita obligar a enviar todo el objeto

type UpdateTourPackage = Partial<TourPackage>;

const updatePackage: UpdateTourPackage = {
  price: 1000,
};

console.log('Actualización parcial de paquete:', updatePackage);

console.log('\n Proyecto ejecutado correctamente!\n');