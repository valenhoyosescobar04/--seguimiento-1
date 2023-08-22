// Mostrar mensaje de bienvenida
console.log("Bienvenido al sistema de votación electrónica");

// Inicializar variables de conteo para los candidatos
let votosAnaMaria = 0;
let votosDiegoAcero = 0;

// Repetir 10 veces para los 10 votantes
for (let i = 1; i <= 10; i++) {
  console.log("Votante " + i + ":");
  console.log("1. Ana Maria Suarez");
  console.log("2. Diego Acero");

  const opcionVoto = parseInt(prompt("Seleccione una opción de voto (1 o 2):"));

  if (opcionVoto === 1) {
    votosAnaMaria++;
  } else if (opcionVoto === 2) {
    votosDiegoAcero++;
  } else {
    console.log("Opción inválida. Voto no registrado.");
  }
}

// Determinar ganador y perdedor
let ganador, perdedor;

if (votosAnaMaria > votosDiegoAcero) {
  ganador = "Ana Maria Suarez";
  perdedor = "Diego Acero";
} else if (votosDiegoAcero > votosAnaMaria) {
  ganador = "Diego Acero";
  perdedor = "Ana Maria Suarez";
} else {
  console.log("La votación terminó en empate.");
}

// Mostrar resultados de la votación
console.log("El ganador es " + ganador + " con " + (votosAnaMaria > votosDiegoAcero ? votosAnaMaria : votosDiegoAcero) + " votos.");
console.log("El perdedor es " + perdedor + " con " + (votosAnaMaria < votosDiegoAcero ? votosAnaMaria : votosDiegoAcero) + " votos.");
console.log("Gracias por usar el sistema de votación electrónica. ¡Hasta luego!");
