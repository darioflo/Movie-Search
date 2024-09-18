const $TEMPLATE = document.getElementById("template-one").content;// template para colocar el elemento
const FRAGMENT = document.createDocumentFragment() //fragmento para agregarlo al dom
const $FILM = document.querySelector(".film") // clase film donde iran la foto y la informacion de la pelicula
const $INFO_FILM = document.querySelector(".info-film") // guardar la informacion de la pelicula  
const $IMG_FILM = document.querySelector(".img-film") //guardar la imagen de la pelicula

export const SHOW_FILM = (film) => { // le paso por parametro el nombre de la pelicula
    if ($INFO_FILM.childNodes.length === 33 && $IMG_FILM.childNodes.length ===1) { // si viene con esa cantidad d nodos hijos esas respuestas limpiar su contenido (especifico de la respuesta)
        $IMG_FILM.innerHTML = ""
        $INFO_FILM.innerHTML =""
    }
    
    $TEMPLATE.querySelector(".title").textContent = film.Title || "Without information" // guardar los datos de la pelicula seleccionada
    $TEMPLATE.querySelector(".genre").textContent = film.Genre || "Without information" 
    $TEMPLATE.querySelector(".writer").textContent = film.Writer || "Without information"
    $TEMPLATE.querySelector(".actors").textContent = film.Actors || "Without information"
    $TEMPLATE.querySelector(".plot").textContent = film.Plot || "Without information"
    $TEMPLATE.querySelector(".language").innerHTML = `<p><i>${film.Language}</i></p>`

    let img = document.createElement("img") // creo una imagen 
    img.src = film.Poster // guardo en su src la direccion del poster de la pelicula
    $FILM.querySelector(".img-film").appendChild(img) //guardo la imagen en su contenedor

    let clone = document.importNode($TEMPLATE,true) // clonar la template
    FRAGMENT.appendChild(clone) // introducirla en el fragmento 
    
    $INFO_FILM.appendChild(FRAGMENT) // introducir el fragmento en el DOM
}












