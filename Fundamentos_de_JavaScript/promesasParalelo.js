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

function obtenerPersonajeId(id) {
  return new Promise((resolve, reject) => {
    const Url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(Url, opts, function (data) {
      resolve(data); // la funcion resolve no se va a llamar hasta que la fuincion que la contienen no se ejecute
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6, 7];

var promesas = ids.map((id) => obtenerPersonajeId(id));

Promise.all(promesas)
  .then((personajes) => console.log(personajes))
  .catch(onError);
