const getInfo = async ()=>{
   try{    
       resultado = await axios("cofla13.txt")
       document.querySelector(".num-a").innerHTML = resultado.data.aprobados;
       document.querySelector(".num-d").innerHTML = resultado.data.desaprobados

   } catch(e){
       console.log(e)
   }
}

document.querySelector("#getInfo").addEventListener("click",getInfo);