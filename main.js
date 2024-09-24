window.addEventListener('load',obtenerInformacion);

function obtenerInformacion (){

    const NasaApi = 'piOGQeojP5W15RLTuwN5MjC9jzjIjLyA9LjYHvkR';
    const ruta = 'https://api.nasa.gov/planetary/apod?api_key=${nasaApi}';

    fetch(ruta)
    .then(respueta => respueta.json())
    .then(resultado => mostrarInformacion(resultado))
}


function mostrarInformacion({date,explication,media}){

}