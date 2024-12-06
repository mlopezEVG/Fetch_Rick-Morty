document.getElementById('pulsar').addEventListener('click', function() {

const api = 'https://rickandmortyapi.com/api/character/';
fetch(api)
        .then(respuesta => respuesta.json()) // Se convierte la respuesta a JSON
        .then(datos => { // Se procesan los datos obtenidos
            datos.results.forEach(element => { // Recorremos el objeto que queremos del array datos
                document.write(`<img src="${element.image}">`);//Muestra imágenes de la API
            });
        })
        document.write(`<div><a href="index.html">Volver</a></div>`);
});