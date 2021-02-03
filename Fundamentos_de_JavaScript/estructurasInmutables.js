var Sasha = {
  nombre: "Sasha",
  apellido: "Zamora",
  edad: 28,
};
var Jess = {
  nombre: "Jessica",
  apellido: "Test",
  edad: 28,
};

//const cumpleaños = (persona) => persona.edad++;

const cumpleañosInmutable = (persona) => {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
};

/// contexto al llamar una función

function saludar(saludo = "hola") {
  console.log(`${saludo}, nombre es  ${this.nombre}`); // aqui hace referencia a wmdow
}

/**Debuelve un anueva funcion atando el parametro a this bind(__parametroAtar__)  */
const saludarSasha = saludar.bind(Sasha, "que mas");
const saludarJessica = saludar.bind(Jess, "que hubo");
/**Cada funcion tiene atado un this distinto */

/**No afecta a la funcion anterior */
//setTimeout(saludar.bind(Sasha, "hola che"), 1000);

//saludar.call(Sasha, "hola man");
saludar.apply(Sasha, ["hola man"]);
