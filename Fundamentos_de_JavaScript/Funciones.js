var name = "Sasha";
var edad = 28;

function printData(name, edad) {
  console.log(`${name} tiene ${edad}`);
}

printData("Javier", 28);
printData();

function printNameUperCase(name) {
  name = name.toUpperCase();
  console.log(name);
}

printNameUperCase(name);
