// Mostrar mensaje de bienvenida
console.log("Bienvenido a VenXtucarro - Concesionario de carros");

// Solicitar al usuario ingresar la marca de carros
console.log("Marcas disponibles:");
console.log("1. Chevrolet");
console.log("2. Mazda");
console.log("3. Renault");

const opcionMarca = parseInt(prompt("Seleccione una marca (1 para Chevrolet, 2 para Mazda, 3 para Renault):"));

let referenciaSeleccionada = "";

// Selección de referencia por marca
switch (opcionMarca) {
  case 1:
    console.log("Referencias disponibles para Chevrolet:");
    console.log("1. Captiva");
    console.log("2. Tracker");
    const opcionChevrolet = parseInt(prompt("Seleccione una referencia para Chevrolet (1 para Captiva, 2 para Tracker):"));
    if (opcionChevrolet === 1) {
      referenciaSeleccionada = "Captiva";
    } else if (opcionChevrolet === 2) {
      referenciaSeleccionada = "Tracker";
    } else {
      console.log("Referencia inválida.");
    }
    break;
  case 2:
    console.log("Referencias disponibles para Mazda:");
    console.log("1. Modelo A");
    console.log("2. Modelo B");
    const opcionMazda = parseInt(prompt("Seleccione una referencia para Mazda (1 para Modelo A, 2 para Modelo B):"));
    if (opcionMazda === 1) {
      referenciaSeleccionada = "Modelo A";
    } else if (opcionMazda === 2) {
      referenciaSeleccionada = "Modelo B";
    } else {
      console.log("Referencia inválida.");
      process.exit(1);
    }
    break;
  case 3:
    console.log("Referencias disponibles para Renault:");
    console.log("1. Referencia X");
    console.log("2. Referencia Y");
    const opcionRenault = parseInt(prompt("Seleccione una referencia para Renault (1 para Referencia X, 2 para Referencia Y):"));
    if (opcionRenault === 1) {
      referenciaSeleccionada = "Referencia X";
    } else if (opcionRenault === 2) {
      referenciaSeleccionada = "Referencia Y";
    } else {
      console.log("Referencia inválida.");
      process.exit(1);
    }
    break;
  default:
    console.log("Marca inválida.");
}

// Mostrar información de referencia seleccionada
console.log("Información de la referencia " + referenciaSeleccionada + ":");

// Simulación de información (puedes agregar más detalles)
console.log("Características técnicas: ...");
console.log("Precio: ...");
console.log("Disponibilidad: ...");

// Mostrar mensaje de despedida
console.log("¡Gracias por visitar VenXtucarro! ¡Hasta luego!");
