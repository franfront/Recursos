class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color; 
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
    verInfo(){ //metodo
        document.write(this.info)
    }
}

// Herencia
class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color)
        this.raza = null;
    }
    set setmodificarRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }

}
// get obtenes un valor
// set metodo(valor) lo toma como propiedad, objeto.metodo = valor;
//static metodo() clase.metodo asi se ejecuta el metodo sin construir el objeto 
//this.propiedad = valor
// new nuevo objeto
//.propiedad accede al valor
const gato = new animal("gato",5,"rojo");
const can = new perro("perro", 5, "blanco", "caniche")

can.setmodificarRaza = "Bulldog";

document.write(can.getRaza)

// 