// Mostrar mensaje de bienvenida
console.log("Bienvenido a la biblioteca municipal de Armenia");

// Solicitar al usuario si es una devolución o una pérdida
console.log("Opciones disponibles:");
console.log("1. Devolución");
console.log("2. Pérdida");

const opcion = parseInt(prompt("Seleccione una opción (1 para Devolución, 2 para Pérdida):"));

let montoMulta = 0;

if (opcion === 1) {
  // Devolución
  const diasRetraso = parseInt(prompt("Ingrese la cantidad de días de retraso:"));
  const revistasPrestadas = parseInt(prompt("Ingrese la cantidad de revistas prestadas:"));
  const librosPrestados = parseInt(prompt("Ingrese la cantidad de libros prestados:"));
  
  montoMulta = (diasRetraso * 500) + (diasRetraso * 600) * (revistasPrestadas + librosPrestados);
} else if (opcion === 2) {
  // Pérdida
  const ejemplaresPerdidos = parseInt(prompt("Ingrese la cantidad de ejemplares perdidos:"));
  
  montoMulta = ejemplaresPerdidos * 10000;
} else {
  console.log("Opción inválida. Por favor, seleccione una opción correcta.");
}

// Mostrar monto total de la multa
console.log("El monto total de la multa a pagar es: $" + montoMulta.toFixed(2));

// Mostrar mensaje de despedida
console.log("Gracias por usar el sistema de gestión de multas de la biblioteca. ¡Hasta luego!");