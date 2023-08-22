// Definir la cadena de caracteres para los asteriscos y el igual
const asteriscos = "* * * * * * ";
const igual = "=============================================";

// Generar la salida
for (let i = 1; i <= 5; i++) {
  console.log(asteriscos);
  if (i < 5) {
    console.log(igual);
  }
}
console.log(igual);
