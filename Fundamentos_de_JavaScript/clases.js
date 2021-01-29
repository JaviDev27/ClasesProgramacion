//this hace referencia al objeto
function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre} ${this.apellido} `);
};

Persona.prototype.esAlto = function () {
  console.log(`${this.altura >= 1.8 ? "Soy alto" : "No soy alto"}`);
};

///herencia
function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

function heredaDe(prototipohijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipohijo.prototype = new fn();
  prototipohijo.prototype.constructor = prototipohijo;
}

heredaDe(Desarrollador, Persona);
/*primero debes hacer el mecanismo de herencia para llamar un metodo 
de la clase hija */

Desarrollador.prototype.saludar = function () {
  console.log(
    `hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`
  );
};
//New para crear un nuevo objeto
// y se le asigna el objeto
var sasha = new Persona("Javier", "Manobanda", 1.65);
sasha.saludar();
sasha.esAlto();

var Jorge = new Persona("Jorge", "Andrango", 1.85);
Jorge.saludar();
Jorge.esAlto();

////UNA MEJOR FORM DE CREAR CLASES

class Persona1 {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} `);
    //revisa si esta definido fn
    if (fn) {
      fn(this.nombre, this.apellido, false);
    }
  }

  esAlto() {
    console.log(`${this.altura >= 1.8 ? "Soy alto" : "No soy alto"}`);
  }
}

class Desarrollador1 extends Persona1 {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    console.log(
      `hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`
    );

    //revisa si esta definido fn
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Hola ${nombre} ${apellido}`);
  if (esDev) {
    console.log("no sabia que eras desarrollad@");
  }
}

var Jorge = new Desarrollador1("Jorge", "Andrango", 1.85);
Jorge.saludar(responderSaludo);
