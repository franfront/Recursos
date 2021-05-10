//saca los numeros pares
let numeros = [1,2,3,4,5,6,7,8,9,10];

function impares(numero){
    return numero % 2
}

console.log(numeros.filter(impares));
