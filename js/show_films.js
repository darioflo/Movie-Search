const $SHOW_FILM = document.querySelector(".show-films")// variable para el div donde se mostraran las peliculas
const $TEMPLATE = document.getElementById("template-two").content //template para ir colocando los elementos
const FRAGMENT = document.createDocumentFragment(); // fragmento para agregar los elementos al DOM

export const SHOW_FILMS = (films) => { // le paso por parametros la respuesta de load_films
    films.forEach((film) => { //la recorro y por cada resultado
        $TEMPLATE.querySelector(".img-search img").src = film.Poster // selecciono el atributo .src de todas las imagenes que estan dentro de img-search
        if (film.Poster === "N/A") { // si la imagen viene vacia 
            $TEMPLATE.querySelector(".img-search img").alt = "Sin Imagen"// muestro esto con el alt
        }
        $TEMPLATE.querySelector(".info-search h3").textContent = film.Title // en el h3 pongo el titulo 
        $TEMPLATE.querySelector(".info-search p").textContent = film.Year // y en el p el anio

        let clone = document.importNode($TEMPLATE,true) // clono todo lo que hay dentro de la etiqueta template
        FRAGMENT.appendChild(clone) // lo agrego al fragmento 
    });

    $SHOW_FILM.appendChild(FRAGMENT) //y agrego el fragmento a showfilm
}   










