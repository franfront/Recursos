const boton = document.querySelector(".boton");
const salida = document.querySelector("#salida")

boton.addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let parrafo = document.createElement("p");
    parrafo.innerHTML = `Hola ${nombre} ${apellido}`
    salida.appendChild(parrafo)
})
