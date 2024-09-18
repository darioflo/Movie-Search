import { SHOW_FILM } from "./show_film.js"//importo el modulo de show film 
const $FILM = document.querySelector(".film") //la variable film para lanzar el error
const $LOADER = document.querySelector(".loader-one")

export const LOAD_FILM = async (name) => { // le paso el nombre de la pelicula a buscar
    try {
        $LOADER.style.display = "block" //muestro el loader
        let url = `http://www.omdbapi.com/?t=${name}&plot=full&apikey=fc1fef96` // url hacia la api con el nombre de la pelicula
        let res = await fetch(url) // espero por la peticion de la api
        let json = await res.json()  // y espero a convertirla en json

        if(!res.ok) throw {Status:res.status, StatusText:res.statusText} // si la respuesta no viene en estado ok lanzo el status y el statusText
        $LOADER.style.display = "none" // escondo el loader
        SHOW_FILM(json) // llamo a la funcion show film
    } catch (error) { // capturando el error
        let message = error.statusText || "Ocurrio un error durante la peticion" // guardo el statusText y si viene vacio muestro ese mensaje
        $FILM.innerHTML = `<p><b>Error ${error.status}:</b> ${message}</p>` //muestro el mensaje de errror
    }
}












