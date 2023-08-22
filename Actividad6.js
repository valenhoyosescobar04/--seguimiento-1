// Mostrar mensaje de bienvenida
console.log("Bienvenido a la pizzería Italiana pizza");

// Mostrar menú de opciones
console.log("Opciones disponibles:");
console.log("1. Pizza ($7000 por unidad)");
console.log("2. Sándwiches ($5000 por unidad)");
console.log("3. Ensaladas ($15000 por unidad)");

// Solicitar opción al usuario
const opcion = parseInt(prompt("Seleccione una opción (1 para Pizza, 2 para Sándwiches, 3 para Ensaladas):"));

let costoUnitario;
switch (opcion) {
  case 1:
    costoUnitario = 7000;
    break;
  case 2:
    costoUnitario = 5000;
    break;
  case 3:
    costoUnitario = 15000;
    break;
  default:
    console.log("Opción inválida. Por favor, seleccione una opción correcta.");
}

// Solicitar cantidad de porciones al usuario
const cantidadPorciones = parseInt(prompt("Ingrese la cantidad de porciones que desea:"));

// Solicitar si se desea agregar salsa adicional
const agregarSalsa = prompt("¿Desea agregar salsa adicional? (sí/no)").toLowerCase();

let costoSalsaAdicional = 0;
if (agregarSalsa === "sí") {
  costoSalsaAdicional = 500;
}

// Calcular costo total
const costoTotal = (costoUnitario * cantidadPorciones) + costoSalsaAdicional;

// Mostrar costo total
console.log("El costo total de su pedido es: $" + costoTotal.toFixed(2));

// Mostrar mensaje de despedida
console.log("¡Gracias por ordenar en Italiana pizza. Que disfrute su comida!");
