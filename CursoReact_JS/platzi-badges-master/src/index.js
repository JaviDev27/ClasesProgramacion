import React from "react";
import ReactDOM from "react-dom";

//const jsx = <h1> Hello, Platzi HOLAAA</h1>

//const element = React.createElement('a',{href: 'https://platzi.com'},'Ir a platzi')

//nst name = "Javi Manito";

// const element = React.createElement(
//     'h1',
//     {},
//     `Mi nombre ${name}`
// )
//const sum = () => 3 + 3;
//const jsx = <h1>hola soy {sum()}</h1>;

const name = "Javier";

const jsx = (
  <div>
    <h1>Hola soy {name}</h1>
    <p>Soy mecatrónico</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola Javi"),
  React.createElement("p", {}, "Mecatrónico DE LA WEB")
);

const container = document.getElementById("app");

//ReactDOM.render(--que--, --donde--)

ReactDOM.render(element, container);
