var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
  contador++;
} while (!llueve());

const textveces = (contador) => (contador > 1 ? "veces" : "vez");

console.log(`fui a ver si llovia ${contador} ${textveces(contador)}`);
