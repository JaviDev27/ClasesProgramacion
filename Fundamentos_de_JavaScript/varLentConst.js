var sasha = {
  nombre: "sasha",
  edad: 19,
};

function esMayorEdad(persona) {
  let mensaje;
  const MAYORIA_EDAD = 18;
  if (persona.edad >= MAYORIA_EDAD) {
    mensaje = "es mayor de edad";
  } else {
    mensaje = "es menor de edad";
  }

  console.log(mensaje);
}

esMayorEdad(sasha);

for (let index = 0; index < 10; index++) {
  console.log(index);
}

console.log(`El valor de i es ${index}`);
console.log(`El valor de i es ${index}`);
