const PATH = "https://swapi.dev/api/";
const DIR_STARSHIPS = "starships/:id/";

function getStartById(id) {
  return new Promise((resolve, reject) => {
    const url = `${PATH}${DIR_STARSHIPS.replace(":id", id)}`;
    $.get(url, (estrella) => resolve(estrella)).fail(() => reject(id));
  });
}

getStartById(3)
  .then((estrella) => {
    console.log(estrella.name);
  })
  .catch((id) => console.log(`Error en id: ${id}`));
