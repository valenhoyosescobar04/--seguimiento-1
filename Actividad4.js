// Mostrar mensaje de bienvenida
console.log("Bienvenido al servicio Lavanservis");

// Mostrar opciones de servicios y solicitar entrada al usuario
console.log("Opciones de servicios:");
console.log("1. Lavado");
console.log("2. Planchado");

const servicio = parseInt(prompt("Seleccione un servicio (1 para Lavado, 2 para Planchado):"));

let tipoLavado, costoServicio;
if (servicio === 1) {
  console.log("Opciones de lavado:");
  console.log("1. Lavado en seco");
  console.log("2. Lavado normal");
  
  tipoLavado = parseInt(prompt("Seleccione el tipo de lavado (1 para Lavado en seco, 2 para Lavado normal):"));

  if (tipoLavado !== 1 && tipoLavado !== 2) {
    console.log("Opción inválida. Seleccionando Lavado normal por defecto.");
    tipoLavado = 2; // Lavado normal por defecto
  }
}

const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas:"));

// Calcular costo de los servicios
if (servicio === 1) {
  if (tipoLavado === 1) {
    costoServicio = cantidadPrendas * 4000;
  } else if (tipoLavado === 2) {
    costoServicio = cantidadPrendas * 3000;
  }
} else if (servicio === 2) {
  costoServicio = cantidadPrendas * 2000 + 4000; // Se suma el costo del domicilio
} else {
  console.log("Opción inválida de servicio.");
}

// Mostrar costo total
console.log("Costo total del servicio: $" + costoServicio.toFixed(2));

// Mostrar mensaje de despedida
console.log("Gracias por usar el servicio Lavanservis. ¡Hasta luego!");
