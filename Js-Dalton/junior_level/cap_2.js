//Dejas pasar a mayores de edad y luego de 2 am no paga
/*
let free = false;

const validacion = (time) =>{
    let edad = prompt("Cual es tu edad?")
    if (edad > 18){ 
    
         if (time >= 2 && time <7 && free == false){
            alert("podes pasar gratis, son las " + time)
             free = true
         } else{
             alert("Podes pasar pero tenes que pagar, son las " + time)
         }
        }
    else{
        alert("No podes pasar")
    }
        }

validacion(23);
validacion(4)
validacion(8)
*/

// registrar presentes y ausentes

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

//Pide los nombres y los almacena
for ( i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno: " +(i + 1)), 0]
}
// Toma la asistencia en 30 dias
const asistencia = (nombre,p) =>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for ( i = 0; i < 30; i++) {
    for ( alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0], alumno)
    }
}

// Calcula sino desaprobaron por ausencias
for ( alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
           ___________ Asistencias: ${alumnosTotales[alumno][1]} <br>
           ____________ Ausencias: ${30 - alumnosTotales[alumno][1]}`
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado += "Reprobado por faltar"
    } else{
        resultado+= "<br><br>"
    }
    document.write(resultado)

}
