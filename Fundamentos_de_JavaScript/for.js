var Sasha = {
  nombre: "Sasha",
  apellido: "Zamora",
  edad: 28,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
  peso: 75,
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
  peso: 343,
};

console.log(`al inicio del año ${Sasha.nombre} pesa ${Sasha.peso} kg`);

var incremento = 0.2;
var decremento = 0.2;
const DIAS_DEL_YEAR = 365;

const aumentarPeso = (persona) => {
  persona.peso += incremento;
};

const BajarPeso = (persona) => {
  persona.peso -= decremento;
};

for (var i = 1; i <= DIAS_DEL_YEAR; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarPeso(Sasha);
  } else if (random < 0.5) {
    BajarPeso(Sasha);
  }
}

console.log(
  `al final del año ${Sasha.nombre} pesa ${Sasha.peso.toFixed(2)} kg`
);
