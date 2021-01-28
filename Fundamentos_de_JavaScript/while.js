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

const comemucho = () => Math.random() < 0.3;
const hacedeporte = () => Math.random() < 0.4;

const META = Sasha.peso - 3;
var dias = 0;

while (Sasha.peso > META) {
  //debugger;
  if (comemucho()) {
    aumentarPeso(Sasha);
  }
  if (hacedeporte()) {
    BajarPeso(Sasha);
  }

  dias++;
}

console.log(`en ${dias} ${Sasha.nombre} pesa ${Sasha.peso.toFixed(2)} kg`);
