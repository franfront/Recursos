let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
for(i = 6;i >= 0;i--){
    if(i == 6){
        alert("Es domingo y par")
        
    }else if(i % 2 == 0){ 
        console.log(dias[i] + " es un numero par")
    } else{console.log(dias[i])}

}