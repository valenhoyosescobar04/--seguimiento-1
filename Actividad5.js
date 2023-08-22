// Mostrar mensaje de bienvenida
console.log("Bienvenido al simulador de compra de stickers");

// Solicitar tamaño de stickers al usuario
console.log("Tamaños disponibles:");
console.log("1. Pequeño ($4000)");
console.log("2. Grande ($6000)");

const opcionTamaño = parseInt(prompt("Seleccione el tamaño de los stickers (1 para Pequeño, 2 para Grande):"));

let costoUnitario;
if (opcionTamaño === 1) {
  costoUnitario = 4000;
} else if (opcionTamaño === 2) {
  costoUnitario = 6000;
} else {
  console.log("Opción inválida. Por favor, seleccione una opción correcta.");
}

// Solicitar cantidad de stickers al usuario
let cantidadStickers;
do {
  cantidadStickers = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));

  if (cantidadStickers < 10) {
    console.log("La cantidad mínima permitida es 10. Por favor, ingrese una cantidad válida.");
  }
} while (cantidadStickers < 10);

// Calcular costo total
const costoTotal = costoUnitario * cantidadStickers;

// Mostrar costo total
console.log("El costo total de la compra es: $" + costoTotal.toFixed(2));

// Mostrar mensaje de despedida
console.log("¡Gracias por usar el simulador de compra de stickers. Hasta luego!");
