var Sasha = {
  nombre: "Sasha",
  apellido: "Zamora",
  edad: 28,
};
var Dario = {
  nombre: "Dario",
  apellido: "Andraas",
  edad: 38,
};

function printNameUperCase(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

printNameUperCase(Sasha);
printNameUperCase(Dario);

function printNameEge(persona) {
  var { nombre, edad } = persona;
  console.log(`hola mi nombre es ${nombre} y tengo ${edad}`);
}

printNameEge(Dario);
printNameEge(Sasha);

function birthday(persona) {
  persona.edad += 1;
}

function birthday2(edad) {
  edad += 1;
}
function birthday3(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}
