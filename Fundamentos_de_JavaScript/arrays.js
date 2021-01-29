var Sasha = {
  nombre: "Sasha",
  apellido: "Zamora",
  edad: 28,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
  altura: 2,
  cantidadlibros: 145,
};
var Juan = {
  nombre: "Juan",
  apellido: "Zamora",
  edad: 15,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
  altura: 1.8,
  cantidadlibros: 14,
};
var Jose = {
  nombre: "Jose",
  apellido: "Zamora",
  edad: 15,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
  altura: 1.87,
  cantidadlibros: 123,
};
var Jorge = {
  nombre: "Jorge",
  apellido: "Zamora",
  edad: 15,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
  altura: 1.3,
  cantidadlibros: 1,
};

var personas = [Sasha, Juan, Jorge, Jose];
/*
for (var i = 0; i < personas.length; i++) {
  console.log(`${personas[i].nombre}`);
}*/

esAlta = (persona) => {
  persona.altura >= 1.8;
};

//var personasAltas = personas.filter(esAlta);
var personasAltas = personas.filter(function (personas) {
  return personas.altura >= 1.8;
});

var bajas = ({ altura }) => altura < 1.8;

var personasBajas = personas.filter(bajas);

/* en este caso se va a hacer una copia de la persona
deslosada para que no cambie el array principal*/
const pasarAlturaCms = (personas) => {
  return {
    ...personas,
    altura: personas.altura * 100,
  };
};

var personasCms = personas.map(pasarAlturaCms);

console.log(personasCms);

const reducer = (acum, personas) => {
  return acum + personas.cantidadlibros;
};

var totalLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalLibros} libros`);
