/*const diasMeses = [31 ,28, 31, 30]
const meses = ["enero", "febrero", "marzo", "abril"]
for(let i = 0; i < diasMeses.length; i ++){
    console.log(` ${meses[0]} tiene ${diasMeses[0]} dias`)
}*/

const nombre = prompt("ingresa nombre");
const notas = [];
let total = 0;
for (let i = 0; i < 5; i++) {
   let nota = parseint(prompt(`Ìngrese la nota ${i + 1} del alumno ${nombre}`))
    notas.push(nota);
    total += nota;
}

const promedio = total / notas.length;
const maximo = [Math.max(...notas), Math.min(...notas)]


promedio >= 7
    ? document.write("aprobado")
    : document.write("desaprobado");

console.log(`La nota mas baja de ${nombre} es ${maximo[0]} y la mas alta ${maximo(1)}`)

