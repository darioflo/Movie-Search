import { SHOW_FILMS } from "./show_films.js" // importar el modulo show-films que muestra el resultado de la busqueda
const $FILMS = document.querySelector(".show-films") // selecciono el contenedor de films para mostrar el error en esta funcion
const $LOADER = document.querySelector(".loader") // loader para mostrarlo


export const LOAD_FILMS = async (filmName) => { // le paso por parametros el nombre de la pelicula que van a buscar
    try {
        $LOADER.style.display = "block" //muestro el loader para que se muestre la carga mientras se espera
        let url = `http://www.omdbapi.com/?s=${filmName}&apikey=fc1fef96` // la url hacia la api con el nombre de la pelicula 
        let res = await fetch(url) // espero por el resultado de la api 
        let json = await res.json() // y espero a convertirlo a json

        if(!res.ok) throw {status:res.status, statusText: res.statusText} // si la respuesta no viene en su estado ok lanxo el status y el statusText de la respuesta que van a ser capturados en el catch  
        $LOADER.style.display = "none"// escondo el loader
        SHOW_FILMS(json.Search) //llamo a la funcion show_film que es la que va a colocar el resultado dentro de su div
    } catch (error) { //capturo el error
        let message = error.statusText || "Ocurrio un error durante la peticion" // creo la variable mensaje con el statusText del error y si viene vacio lanzo un mensaje
        $FILMS.innerHTML = `<p><b>Error ${error.status}:</b>${message}</p>` //muestro en la seccion film si hay algun error
    }
}







