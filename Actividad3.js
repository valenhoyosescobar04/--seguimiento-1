// Mostrar mensaje de bienvenida
console.log("Bienvenido");

// Solicitar costo del apartamento
const costoApartamento = parseFloat(prompt("Ingrese el costo del apartamento:"));

// Mostrar opciones de tipo de inmueble y solicitar entrada al usuario
console.log("Opciones de tipo de inmueble:");
console.log("1. Usado");
console.log("2. Nuevo");

let tipoInmueble;
do {
  tipoInmueble = parseInt(prompt("Ingrese el tipo de inmueble (1 o 2):"));

  if (tipoInmueble !== 1 && tipoInmueble !== 2) {
    console.log("Opción inválida. Por favor, ingrese 1 o 2.");
  }
} while (tipoInmueble !== 1 && tipoInmueble !== 2);

// Calcular comisión de la inmobiliaria
let comisionInmobiliaria;
if (tipoInmueble === 1) {
  comisionInmobiliaria = costoApartamento * 0.1; // 10%
} else if (tipoInmueble === 2) {
  comisionInmobiliaria = costoApartamento * 0.2; // 20%
}

// Calcular valores para el propietario y la inmobiliaria
const valorPropietario = costoApartamento - comisionInmobiliaria;
const valorInmobiliaria = comisionInmobiliaria;

// Mostrar resultados
console.log("Resultados:");
console.log("Valor que recibe el propietario: $" + valorPropietario.toFixed(2));
console.log("Valor recibido por la inmobiliaria: $" + valorInmobiliaria.toFixed(2));

// Mostrar mensaje de despedida
console.log("Gracias por visitar la pagina. ¡Hasta luego!");
