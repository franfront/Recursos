//Document (en memoria)
document.doctype //tipo de documento
document.charset //tipo de idioma
document.title // Titulo de la pestaña
document.links // links de la pagina, devuelven colecciones como arrays pero no lo son
document.images // imagenes
document.forms // documentos

// getElement obtener elementos

document.getElementById() //mas usada
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()

// querySelector

document.querySelector() //Podes traer elementos y colección de elementos
//tiene .length [acceder] 

// modificar atributos
element.setAttribute("tipo", "atributo"); //cambia el atributo.
element.getAttribute("type"); // obtiene el atributo del tipo
element.removeAttribute("type") // remueve el atributo del elemento
element.style.color = "color nuevo" // modifica el css del elemento

// atributos input
.className // el name del inout
.value // valor del input
.type = "valor" // cambia el tipo
.accept = "image/png" // tipo de archivo soportado

// clases
.classList() // accedes a la clase del elemento 
.classList.add() // agregar
.classList.remove() // la quita
.classList.toggle() // si esta la elimina sinó lo agrega
.classList.replace("uno", "dos") // reemplaza clase uno por clase dos
 
 


// contenido
.textContent = "texto a asignar" // agrega texto almacenado en una variable
.innertHTML = variable // se agrega mas facil
.outerHTML = variable // lo reemplaza

// Crear elementos

document.createElement() // crea un elemento
document.createTextNode() // crea un texto
document.appendChild() // agrega nodo hijo
.createDocumentFragment() // con un for creamos muchos elementos sin consumir tantos recursos, investigar

// recorrido

.children //saber los hijos del nodo, [] acceder a ellos
.fistElementChild // primer nodo
.parentElement // el nodo padre
.previousElementSibling // nodo previo
.nextElementSibling // nodo siguiente


