const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo =`<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-value").value = number;
}


let documentFragment = document.createDocumentFragment();

for (i = 1; i <= 20; i++){
    let modeloRamdom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRamdom}`, precioRandom)
    let div = document.createElement("div");
    div.addEventListener("click",()=>{changeHidden(modeloRamdom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)

