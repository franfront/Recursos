//https://www.w3schools.com/jquery/

// Selectores
$ ("p"); // selecciona los parrafos
$ ("#id") // selecciona id´s
let contenedor = $ (".container") // selecciona clases
$ ("div") // selecciona todos los <div> de una pagina
$ ("a") // selecciona todos los <a>
$ ("p, a") // selecciona los <p> y los <a>
$ ("li.clase #caja") // selecciona todo <li> que contenga la clase "clase" y que dentro tenga un id "caja"
$ ("p:last") // selecciona el ultimo <p> de la pagina
$ ("li:firs-child") // selecciona todos los <li> que son primeros hijos
$ ("li:last-child") // selecciona todos los <li> que son ultimos hijos
$ ("li:onli-child") // selecciona todos los <li> que sean hijos unicos
$ ("li:nth-child(3)") // selecciona todos los <li> que sean el tercer elemento de su lista
$ ("tr:nth-child(odd)") // selecciona todos los <tr> que sean impares
$ ("tr:nth-child(even)") // selecciona todos los <tr> que sean pares
$ ("div:nth-child(3n)") // selecciona cada tercer elemento <div>

// selecctores para forms
$(":text") // selecciona los text
$(":checkbox")
$(":radio")
$(":image")
$(":submit")
$("reset")
$("password")
$("file")
$(":input") // selecciona los input, textarea, select y button
$(":button") // selecciona los elementos button e input con atributo "type"="button"
$(":enable") // selecciona los elementos del formulario activados
$(":disable") // selecciona los elementos del formulario desactivados
$(":checked") // selecciona los radio buttons y checkboxes que estan pulsados
$(":selected") // elementos seleccionados de una lista de opciones

// eventos 

$ (".selector").on("click", function(){
    alert("evento click")
});

$(".div-click").on("focus", function(){
    $(this).css("color", "red");
})

// metodos

$(".clase").append("Hola") // inserta contenido al final
$(".clase").remove() // elimina el elemento y sus hijos
$(".clase").parent() // devuelve el elemento padre
$(".clase").children() // devuelve el elemento hijo

// AJAX

// GET
$("button").click(function() {
    $.get("url",
    
    function(data, status){
        alert("Data: " + data + "estado: " + status);
        // se reciben dos parametros, el primero es la informacion devuelta del servidor(puede ser json) y el segundo es el estado de la operacion: succes o error
    });
});

// POST
$("button").click(function() {
    $.post("url",
    {
        "name" : "Juan Perez",
        "city" : "Buenas Aires"
    },
    
    function(data, status){
        alert("Data: " + data + "estado: " + status);
        // se reciben dos parametros, el primero es la informacion devuelta del servidor(puede ser json) y el segundo es el estado de la operacion: succes o error
    });
});

// Con JSON

$("button").click(function(){
    $.ajax({
        url: "ubicacion/json",
        dataType: "json",
        success: function(response){
            $.each(response.usuarios, function(item){
                alert(item.nombre);
            });
        }
    });
});