/*
let button = document.querySelector(".button");

function saludar(){
    alert("hola")
}

button.addEventListener("click", saludar)


button.addEventListener("click", ()=>{
    alert("Hola")
})
*/

// eventos del mouse

// contextmenu (click derecho)
//doble click
let button = document.querySelector(".button");

button.addEventListener("dbclick", (e)=>{
    alert("click")
})


// eventos del teclado

let input = document.querySelector(".input-prueba")

input.addEventListener("keydown", (e)=>{
    console.log("una tecla fue presionada")
})

input.addEventListener("keypress", (e)=>{
    console.log("un usuario presionó una tecla")
})

input.addEventListener("keyup", (e)=>{
    console.log("una tecla fue soltada")
})

// eventos de la interfaz

const img = document.querySelector("img-prueba");

img.addEventListener("error", ()=>{
    console.log("ha sucedido un error")
})
// cuando ocurre un error en una carga de archivo multimedia
 
window.addEventListener("load", ()=>{
    console.log("Ha cargado la ventana")
})
// cuando se carga un elemento

addEventListener("beforeunload", ()=>{
    console.log("te estas por ir del sitio")
})
// cuando se esta por irse del sitio

input.addEventListener("select", ()=>{
    console.log("se ha seleccionado")
})
//cuando selecionas texto en un input o textarea

// temporizadores

setTimeout(()=>{
    console.log("hola")
}, 1000)

//recibe una funcion y tiempo en milisegundos, se ejecuta en n tiempo

setInterval(() => {
    console.log("hola")
}, 1000);
// recibe una funcion y tiempo en milisegundos, se ejecuta cada n segundos

"event.preventDefault()" // Detiene el evento