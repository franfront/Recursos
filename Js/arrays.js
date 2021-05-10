// Arrays
const meses = [31, 28, 31, 30] // Un array siempre empieza en 0
console.log(meses[0])
//
const nombres = []
nombres[0] = "Cesar" //añadir a posición
/*
.length (cantidad de elementos)
.push() añadir en la ultima posición
.pop() eliminar el ultimo
.unshift(elementos) agrega al inico del array
.splice(posicion, elemento) (1,1) elimina elemento seleccionado
.reverse() invierte el orden
.split(separador) los separa en elementos individuales
.sort() lo ordena por orden alfabeticamente tabla ascii/unicode 
.find() devuelve un elemento
 .findIndex() devuelve el indice del elemento

.join(cosa que une) une los elementos en uno
.slice(inicio,final) corta el array, final no incluido

.filter(funcion) filtra creando un nuevo array
.map(funcion) itera sobre el array y cambia los elementos
.reduce(función) itera sobre el array, con un acumulador.

*/


class Persona{
    constructor(nombre, edad, dni){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
}


let listaPersona = [];
listaPersona.push(new Persona("HOMERO", 39, 12345895));
listaPersona.push(new Persona("MARGE", 33, 20136843));
listaPersona.push(new Persona("BART", 10, 40364953));

let busqueda = prompt("Buscar: ").toUpperCase;

// Recorremos el listado
for ( let persona of listaPersona){
    // por cada objeto del array (persona) recorremos las propiedades
    for( let propiedad in persona){

        if(persona[propiedad] == busqueda){
            alert(`Persona encontrada: ${persona.nombre}`)
        }

    }
}
