// Mostrar mensaje de bienvenida
console.log("Bienvenido al simulador de resultados de la Champions League");

// Definir función para calcular los puntos
function calcularPuntos(marcadorEquipoA, marcadorEquipoB) {
  if (marcadorEquipoA > marcadorEquipoB) {
    return 3; // Victoria
  } else if (marcadorEquipoA === marcadorEquipoB) {
    return 1; // Empate
  } else {
    return 0; // Derrota
  }
}

// Inicializar arrays para nombres y puntos de los equipos
const nombresEquipos = [];
const puntosEquipos = [];

// Solicitar al usuario los resultados de cada fecha
for (let i = 1; i <= 3; i++) {
  console.log("Resultados de la fecha " + i + ":");

  for (let j = 1; j <= 3; j++) {
    const nombreEquipoA = prompt("Ingrese el nombre del equipo A en el partido " + j + ":");
    const marcadorEquipoA = parseInt(prompt("Ingrese el marcador del equipo A en el partido " + j + ":"));

    const nombreEquipoB = prompt("Ingrese el nombre del equipo B en el partido " + j + ":");
    const marcadorEquipoB = parseInt(prompt("Ingrese el marcador del equipo B en el partido " + j + ":"));

    const puntosEquipoA = calcularPuntos(marcadorEquipoA, marcadorEquipoB);
    const puntosEquipoB = calcularPuntos(marcadorEquipoB, marcadorEquipoA);

    // Registrar puntos en los arrays
    if (!nombresEquipos.includes(nombreEquipoA)) {
      nombresEquipos.push(nombreEquipoA);
      puntosEquipos.push(puntosEquipoA);
    } else {
      const index = nombresEquipos.indexOf(nombreEquipoA);
      puntosEquipos[index] += puntosEquipoA;
    }

    if (!nombresEquipos.includes(nombreEquipoB)) {
      nombresEquipos.push(nombreEquipoB);
      puntosEquipos.push(puntosEquipoB);
    } else {
      const index = nombresEquipos.indexOf(nombreEquipoB);
      puntosEquipos[index] += puntosEquipoB;
    }
  }
}

// Crear un array de objetos con nombre y puntos
const equipos = [];
for (let i = 0; i < nombresEquipos.length; i++) {
  equipos.push({ nombre: nombresEquipos[i], puntos: puntosEquipos[i] });
}

// Ordenar el array de equipos por puntos de forma descendente
equipos.sort((a, b) => b.puntos - a.puntos);

// Mostrar ranking de equipos
console.log("Ranking de equipos:");
for (let i = 0; i < equipos.length; i++) {
  console.log((i + 1) + ". " + equipos[i].nombre + " - " + equipos[i].puntos + " puntos");
}

// Mostrar mensaje de despedida
console.log("¡Gracias por usar el simulador de resultados de la Champions League. Hasta luego!");
