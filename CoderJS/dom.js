//  PLANTILLA CLASE 08 - DOM
//  SECCIÓN DE DECLARACIÓN DE INFORMACIÓN ESTÁTICA
const DATOS = [{
    "id": 1,
    "nombre": "PRODUCTO 1",
    "precio": 514
  }, {
    "id": 2,
    "nombre": "PRODUCTO 2",
    "precio": 720
  }, {
    "id": 3,
    "nombre": "PRODUCTO 3",
    "precio": 787
  }, {
    "id": 4,
    "nombre": "PRODUCTO 4",
    "precio": 572
  }, {
    "id": 5,
    "nombre": "PRODUCTO 5",
    "precio": 819
}];
//  SECCION DE DECLARACION DE CLASE
class Producto{
    constructor(datos){
        this.id     = parseInt(datos.id);
        this.nombre = datos.nombre;
        this.precio = parseFloat(datos.precio);
    }

    sumarPrecio(agregado){
        this.precio += agregado;
    }
}
//  SECCION DE DECLARACION DE VARIABLES
let listaProductos = [];
let productoPrueba = new Producto(DATOS[0]);

let generadoPadre = document.querySelector("#contenidoGenerado");
let parrafoNuevo = document.createElement("p");
parrafoNuevo.innerHTML = "Producto: " + productoPrueba.nombre+ "- Precio: "+productoPrueba.precio;
generadoPadre.appendChild(parrafoNuevo);

console.log(productoPrueba);

