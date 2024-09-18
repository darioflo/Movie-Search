import { LOAD_FILMS } from "./load_films.js" //importo los modulos para cagar las peliculas
import { LOAD_FILM } from "./load_film.js"
const $INPUT = document.querySelector("input") // guardo el input
const $SHOW_FILM = document.querySelector(".show-films") // y guardo donde se muestran las peliculas
let countEnter = [] // arreglo para contar la cantidad de veces que se hace una busqueda

export const SEARCH_FILMS = () => {
    $SHOW_FILM.style.opacity = "0" // escondo el contenedor que muestra el resultado de las busquedas
    $INPUT.addEventListener("keydown",(e)=>{ // escuchador de eventos del input para cuando se apriete una tecla
        if(e.key === "Enter"){ // si la tecla fue enter
            if ($SHOW_FILM.style.display === "none") { // y el display del show film esta en none
                $SHOW_FILM.style.display = "block" //muestro el display
            }
        countEnter.push(e.key) // agrego la tecla enter al arreglo
        $SHOW_FILM.style.opacity = "1" // muestro el contenedor con los resultados
        LOAD_FILMS($INPUT.value) // y cargo los filmes con ese nombre
        $INPUT.value = "" // y llevo el input a vacio
            if (countEnter.length > 1) { // si he pulsado enter mas de una vez vaciar el contenido de showfilm
                $SHOW_FILM.innerHTML=""
            }
        }
})
    $SHOW_FILM.addEventListener("click",(e)=>{ // escuchador de eventos para mostrar la pelicula en el DOM
        e.preventDefault() // prevengo el comportamiento por default del evento
        let film = e.target.parentNode.parentNode // y guardo en film el padre de todos los elementos
        let filmName = film.querySelector("h3").textContent // selecciono el h3 dentro de ese contenedor que es el nombre de la pelicula
        LOAD_FILM(filmName)// y se lo paso a la funcion load film para que me lo traiga de la Api
        $SHOW_FILM.style.display = "none" // y escondo el mostrador con tod os los filmes
    })

}

