//  PLANTILLA CLASE 07 - STORAGE Y JSON
//  SECCION DE DECLARACION DE CLASE
class Producto{
    constructor(nuevoID, nuevoNombre,nuevoPrecio){
        this.id     = parseInt(nuevoID);
        this.nombre = nuevoNombre;
        this.precio = parseFloat(nuevoPrecio);
    }

    sumarPrecio(agregado){
        this.precio += agregado;
    }
}
//  SECCION DE DECLARACION DE VARIABLES
let listaProductos = [];

/*
if (localStorage.getItem("producto1") != null) {
    console.log(localStorage.getItem("producto1"))
}
*/


console.log(JSON.parse(localStorage.setItem("producto")));

let entradaUsuario = prompt("OPCION (1) CREAR PRODUCTO");
//  PROCESO PRINCIPAL
if(entradaUsuario === "1"){
    listaProductos.push(new Producto(1,"PIZZA",400));
    localStorage.setItem("producto", JSON.stringify(listaProductos[0]));
}

/*
// Almacenar
localStorage.Nombre =  "Miguel Antonio";
let nombre = localStorage.Nombre;

sessionStorage.Nombre =  "Miguel Antonio";
let nombre = sessionStorage.Nombre;

// Eliminar
localStorage.removeItem("Nombre")
sessionStorage.removeItem("Nombre")

// Borra toda la info
localStorage.clear()
sessionStorage.clear()

*/

let unJson = {
    "nombre":"Juan",
    "edad":30,
    "auto":null
};

let obj = JSON.parse(unJson); // convierte json en objeto js

let format = JSON.stringify(obj); // convierte un objeto js a un json




