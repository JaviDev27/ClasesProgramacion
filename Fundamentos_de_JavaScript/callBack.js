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

onResponse = function (luke) {
  console.log(`hola yo soy ${luke.name}`);
};

$.get(lokeUrl, opts, onResponse); //arguments es un avariable que
/*tiene todos los objetos que nos da un array con los parametros que recibe la funcion*/

/**/
