var Sasha = {
  nombre: "Sasha",
  apellido: "Zamora",
  edad: 28,
  ingeniero: false,
  cocinero: true,
  dj: true,
  guitarrista: false,
  drone: false,
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
};

function printProfetions(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log("ingeniero");
  } else {
    console.log("no es ingeniero");
  }

  if (persona.cocinero) {
    console.log("cocinero");
  }
  if (persona.dj) {
    console.log("dj");
  }
  if (persona.drone) {
    console.log("drone");
  }
}

printProfetions(Sasha);

const MAYORIA_EDAD = 18;

//var mayorAge = (persona) => persona.edad > MAYORIA_EDAD;
const mayorAge = ({ edad }) => edad > MAYORIA_EDAD;

function printAge(persona) {
  if (mayorAge(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

printAge(Sasha);

function upper({ nombre }) {
  console.log(`${nombre.toUpperCase()}`);
}

upper(Sasha);

function permitirAcceso(persona) {
  if (!mayorAge(persona)) {
    console.log("acceso denegado");
  }
}

permitirAcceso(Juan);

const mayorDeEdad = (persona) => {
  if (mayorAge(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
};

mayorDeEdad(Sasha);
mayorDeEdad(Juan);
