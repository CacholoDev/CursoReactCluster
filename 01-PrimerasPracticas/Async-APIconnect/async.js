// Función asíncrona que toma un término de búsqueda y obtiene el contenido de la página de Wikipedia
const probAsync = async (termino) => {
    // Realiza una solicitud a la API de Wikipedia con el término dado
    // Se añade `origin=*` para evitar problemas de CORS en navegadores
    const respuesta = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=${termino}&rvslots=*&rvprop=content&format=json&origin=*`);

    // Convierte la respuesta en un objeto JSON
    const jsoni = await respuesta.json();

    // Accede al objeto "pages" dentro del JSON devuelto (donde se encuentra la información de la página)
    const pages = jsoni.query.pages;

    // Obtiene la primera clave dentro del objeto "pages" (es el ID de la página, que varía en función de la página solicitada)
    const pageId = Object.keys(pages)[0];

    // Accede al contenido de la primera revisión de la página usando el ID obtenido
    // La propiedad "revisions" contiene las diferentes versiones del contenido, y aquí estamos accediendo a la más reciente
    const content = pages[pageId].revisions[0].slots.main["*"];

    // Devuelve el contenido de la página de Wikipedia en formato "wikitext"
    return content;
}

// Llama a la función probAsync pasando el término de búsqueda "ECMAScript"
// Cuando la promesa se resuelve (con el contenido), se imprime en la consola
probAsync('ECMAScript')
    .then(jsoni => console.log(jsoni)) // Si se resuelve correctamente, muestra el contenido en la consola
    .catch(error => console.error('Error: ', error)); // Si ocurre algún error en la solicitud, lo muestra en la consola
