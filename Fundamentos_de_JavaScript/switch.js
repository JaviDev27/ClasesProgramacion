var signo = prompt("cual es tu signo?");
var texto = null;

switch (signo.toLowerCase()) {
  case "cancer":
    texto = "algo de cancer";
    break;
  case "geminis":
    texto = "algo de geminis";
    break;
  case "leo":
    texto = "algo de leo";
    break;
  case "virgo":
  case "vírgo":
    texto = "algo de virgo";
    break;

  default:
    texto = "no es un signo zodiacal";
    break;
}

console.log(texto);
