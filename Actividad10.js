// Mostrar mensaje de bienvenida
console.log("Bienvenido al examen de conocimientos");

// Inicializar variable para el puntaje total
let puntajeTotal = 0;

// Repetir 5 veces para las 5 preguntas
for (let i = 1; i <= 5; i++) {
  console.log("Pregunta " + i + ":");

  // Las respuestas correctas se almacenan en un arreglo
  const respuestasCorrectas = ["b", "f", "a", "v", "c"];

  const pregunta = i;
  let respuesta = "";
  
  // Presentar la pregunta y leer la respuesta del usuario
  switch (pregunta) {
    case 1:
      console.log("¿Cuál es la capital de Francia?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 2:
      console.log("¿Cuántos continentes tiene el mundo?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 3:
      console.log("¿Qué gas es necesario para que se produzca la fotosíntesis?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 4:
      console.log("El Sol es una estrella (v/f).");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    case 5:
      console.log("¿Cuál es el símbolo químico del agua?");
      respuesta = prompt("Ingrese su respuesta:").toLowerCase();
      break;
    default:
      console.log("Pregunta no válida.");
  }

  // Evaluar si la respuesta es correcta y sumar puntos al puntaje total
  if (respuesta === respuestasCorrectas[i - 1]) {
    puntajeTotal += 10;
  }
}

// Mostrar resultados del examen
console.log("Resultados del examen:");
console.log("Cantidad de respuestas correctas: " + (puntajeTotal / 10));
console.log("Puntaje total obtenido: " + puntajeTotal + " puntos.");

// Mostrar mensaje de despedida
console.log("Gracias por realizar el examen de conocimientos. ¡Hasta luego!");
