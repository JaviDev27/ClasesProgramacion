import React from "react"; // importar React
import conflogo from "../images/badge-header.svg";
import "./styles/Badge.css"; // aqui solo importar sin asignar variables

//Se crea un objeto Badge que hereda de la clase
//React components

class Badge extends React.Component {
  /*todo componente debe tener una
  clase llamada render
  Render define lo que va a mostarr 
  el componente*/

  render() {
    return (
      <div className="Badge">
        <header className="Badge__header">
          <img src={conflogo} alt="Logo Conferen"></img>
        </header>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            alt="Avatar"
          ></img>
          <h1>
            Javier <br></br> Manobanda
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@javi_manobanda</div>
        </div>

        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}

// se necesita exportar el componente
export default Badge;
