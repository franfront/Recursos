/* Cofla celulares
class celulares{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false
    }
    botonEncendido(){
        if (this.encendido == false){
            alert("Prendiendo celular");
            this.encendido = true;
        } else{
            alert("Está apagado")
            this.encendido = false;
        }
    }
    reinicar(){
        this.encendido == true ? alert("reiniciando") : alert("Está apagado");
    }
    tomarFoto(){
        alert(`sacando fotos en ${this.rdc}`)
    }
    grabarVideo(){
        alert(`grabando video en ${this.rdc}`)
    }
    info(){
        document.write(` 
            Color: <b>${this.color}</b></br>
            Peso: <b>${this.peso}</b></br>
            Tamaño: <b>${this.tamaño}</b></br>
            Resolución: <b>${this.rdc}</b></br>
            Memoria RAM: <b>${this.ram}</b></br>
            <br>`)
    }
}

class celularAltaGama extends celulares{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estás grabando video lento")
    }
    reconocimientoFacil(){
        alert("Iniciando escaneo")
    }
    infoAltaGama(){
        return this.info() + `Resolución de camara extra: ${this.resolucionCamaraExtra}`;
    }
}


celular1 = new celulares("rojo", "150g", "5.5", "full HD", "6G");
celular2 = new celulares("azul", "120g", "5.9", "HD", "2G");
celular3 = new celulares("verde", "140g", "5.2", "full HD", "4G");
celular1.info()
celular2.info()
celular3.info()


celular4 = new celularAltaGama("amarrillo", "110g", "5.9", "4K", "4G", "Full HD");
celular5 = new celularAltaGama("Lila", "100g", "5.7", "4K", "8G", "HD");

celular4.infoAltaGama();

celular5.infoAltaGama();
*/

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.iniciada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerada")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("Instalando")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("Desinstalando")
        }
    }
    appInfo(){
        return ` 
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }

}

app = new App("10.000", "4,5 Estrellas", "25mb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();
document.write(`${app.appInfo()}`);