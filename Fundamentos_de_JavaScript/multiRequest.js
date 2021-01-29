const API_URL = "https://swapi.dev/api/"; //url de la api
const PEOPLE_URL = "people/:id"; // la url para consultar presonaje

/*para acceder a la api y hacer un request
acepta varios parametros:
1. la url de la api que queremos acceder
2. indicar a jquery que va a ser a otra pagina
3. colocas el callback que es una funcion
que se va a ejecutar en algun futuro 
pero no se sabe cuando*/

const lokeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };

function obtenerPersonajeId(id, callback) {
  const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $.get(Url, opts, function (person) {
    console.log(`hola, yo soy ${person.name}`);

    if (callback) {
      //verifica si existe un callaback para llamar a la funcion
      callback(); //se llama a la funcion
    }
  });
}

/// se lo conoce como el infierno de los callback -> callback hell
obtenerPersonajeId(1, function () {
  obtenerPersonajeId(2, function () {
    obtenerPersonajeId(3);
  });
});
