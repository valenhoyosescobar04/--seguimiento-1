// Solicitar al usuario ingresar un número entero
const numero = parseInt(prompt("Ingrese un número entero para generar la tabla de multiplicar:"));

// Validar si el número ingresado es válido
if (isNaN(numero)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  console.log("Tabla de multiplicar del número " + numero + ":");
  
  // Generar y mostrar la tabla de multiplicar
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    const resultado = numero * multiplicador;
    console.log(numero + " x " + multiplicador + " = " + resultado);
  }
}
