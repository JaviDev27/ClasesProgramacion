import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//Vas a importar el componente
import Badge from "./components/Badge";

const container = document.getElementById("app");

//ReactDOM.render(--que--, --donde--)
//El --que-- es un elemento para transformar el
//componente se lo cierra entre <>
ReactDOM.render(<Badge />, container);
