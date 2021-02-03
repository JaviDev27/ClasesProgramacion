function crearSalud(finalDeFrase) {
  return function (nombre) {
    console.log(`hola ${nombre} ${finalDeFrase}`);
  };
}

const saludoArgentino = crearSalud("che");
const saludoMexicano = crearSalud("wey");
const saludoColombiano = crearSalud("amigo");

saludoArgentino("sasha");
saludoMexicano("sasha");
saludoColombiano("sasha");
