/* 

Objeto Event

El objeto event representa un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse y proporciona información sobre las propiedades y métodos para manejarlo.

Para acceder al objeto event (e) se pasa automáticamente como un argumento a la función manejadora.

Sintaxis

function funcionManejadora(event) {
    //código a ejecutar...
    console.log(event)//Muestra la lista de propiedades y métodos.
}

Propiedades del evento event:

-type: devuelve el tipo de evento.
-target: devuelve el elemento donde ocurre el evento.
-timestamp: Devuelve la marca de tiempo en milisegundos desde la carga de la pagina.

-code: devuelve el código de la tecla presionada.
-key: devuelve el valor de la tecla presionada.

-clientX: esto devuelve en la posición horizontal de puntero (mouse) en relación a la ventana del navegador.
-clientY: devuelve la posición vertical del puntero del mouse.

*/

const button = document.getElementsByClassName("button");

/* console.log(button[0]); */

button[0].addEventListener('click', mostrarObjetoEvento);

/* Accedemos al objeto de evento */

function mostrarObjetoEvento(event){
    //codigo que ejecuta
    console.log(event)
    console.log(event.type);
    console.log(event.target);
}

document.addEventListener("keydown", function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.code);
    console.log(e.key);
});

document.addEventListener("mousemove", (e) => {
    console.log(e)
    console.log("Cord x:" + e.clientX + " Cord Y: " + e.clientY);
});