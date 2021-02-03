function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24;
  const diferencia = Math.abs(fecha1 - fecha2); // da un numero en milisegundos
  return Math.floor(diferencia / unDia);
}

const hoy = new Date();
const naciemiento = new Date(1992, 5, 27);

diasEntreFechas(hoy, naciemiento);
