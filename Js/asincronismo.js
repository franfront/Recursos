setTimeout(() => "cosa a hacer", milisegundos) //se ejecute una funcion dentro unos milisegundos, la funcion puede estar fuera

setInterval(() => "fargumento", milisegundos) // temporizados, cada tanto tiempo se ejecuta
clearInterval // borra el intervalo

/*
let promise = new Promise(funcion(resolve, reject)=>{
    setTimeout( (funcion)=> resolve("Resuelto"), 1000) } // Devuelve resolve si todo esta bien sino reject

promise.then(algo) //si la promesa esta bien devuelve algo
promise.catch(oc) // si esta mal devuelve algo
*/


// Promise
let nombre = "pedro";

const promesa = new Promise((res,rej)=>{
    if(nombre !== "pedro") rej("lo siento")
    else res(nombre)
})

promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e);
})



// Ajax

const xhr = new XMLHttpRequest()

console.log("Estado de xhr: " + xhr.readyState)
/*le pide que estado está
0: objeto creado
1: Objeto configurado
2: cabeceras/metodo de envio enviadas y recibidas
3: descargando info
4: finalizó
*/

xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))
    }
})

xhr.open("get", "servidor/archivo"); //decimos donde pedir la info
xhr.send() // pide la info

// se crea un XMLHttpRequest(), luego se agrega evento listener



let request;


// por si usa internet explorer
if (window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP")




request.addEventListener("load",()=>{
    let respuesta;
    if (request.status == 200 || request.status == 201) respuesta = request.response;
    else respuesta = "lo siento no se encontró";
    console.log(JSON.parse(respuesta))
})

// readyState estado 1 solicitud creada, 2 enviada, 3 procesando, 4 todo listo

request.open("POST", "https://reqres.in/api/users");

request.setRequestHeader("Content-type", "application/json;charset=UTF8"); // siempre con post


request.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}));




// fetch
fetch("link")
    .then(response => response.json()) // pide los datos en formato json
    .then(json => console.log(json)) //usa los datos
    .catch(error => console.log(error)) // captura error





//Con get
let request = fetch("https://reqres.in/api/unknown/2") // get por defecto

request.then(res =>res.json())
request.then(res=>console.log(res));

// Con post

const request = fetch("https://reqres.in/api/users",{
    method : "POST",
    body : JSON.stringify({
        "name" : "Franco", 
        "lastname" : "Fernandez"
    }),
    headers : {"Content-type" : "application/json"}
})

request.then(res => res.json())
request.then(res =>console.log(res));

// fetch + async/await

let getUsers = async () => {
    try {
        const response = await fetch("link")

        const users = await response.json()

        users.map(obj => {
            console.log(`${obj.name}, ${obj.email}`)
        })
    } catch (error) {
        console.log(error)
    }
}
  
getUsers()


//antes

const getName = ()=>{
    fetch("json.txt")
        .then(res=>{
            if(res.ok) Promise.resolve(res)
            else Promise.reject(res);
        })
        .then(res => console.log(res))
        .catch(e=>console-log(e))
}

getName()


// luego

const getName = async ()=>{
    let request = await fetch("json.txt");
    let resultado = await request.json();
    console.log(resultado)
}

getName()




// Libreria Axios (get por defecto)

// formas con post


axios("https://reqres.in/api/users",{
    method: "post",
    data: {"name" : "Franco", 
          "lastname" : "Fernandez"}
})
    .then(res=>console.log(res.data));



axios.post("https://reqres.in/api/users",{
    "name" : "Franco", 
    "lastname" : "Fernandez"
} )
    .then(res=>console.log(res.data)); //  no es necesario .json



// Modulos, type module en el script en html
export /*Funcion*/

import { /*Funcion*/  } from "module";

// Desestructuracion
let numeros = ["a", "b", "c"]
let [a,b,c] = numeros // crea 3 variables con los datos del array
//tambien funciona con objetos

// parametros rest

function nombre(a,b,...c) // ...rest, ultimo parametros incluye muchos parametros 







// ejercicio dalton
const getName = async ()=>{
    let request = await fetch("json.txt");
    let resultado = await request.json();
    let HTMLCode = `Nombre: ${resultado.name}<br>
                    Apellido: ${resultado.dni}`;
    document.querySelector(".resultado").innerHTML = HTMLCode;
}

document.querySelector("#nombre").addEventListener("click", getName);

 