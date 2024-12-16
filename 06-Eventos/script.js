//alert ("No me sale Neuvillette")

/* 
Evento

 Un evento es una acción o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser "manejados" mediante javascript

  -Manejar Eventos

 Significa escribir código que "reaccione" de cierta manera cuando algo especifico suceda. Para manejar eventos es importante conocer algunos conceptos claves.
    
    1. Target (blanco)

    El elemento target es el elemento del DOM en el que ocurrio el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event, target.

    2. Event Listener (Escuchador)

    El event listener es el "oido" que esta atento a que ocurra un evento en un elemento especifico. Usamos el método addEventListener para escuchar eventos.

    3. Trigger (Disparador)

    Es simplemente el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario l el sistema para activar el evento.

        +Hacer clic
        +Mover el raton
        +Escribir un input
    
    4.Event Handler

    El evento handlres es la función que se ejecuta cada vez que ocurre el evento. Con codigo JS le decimos que hace el event handler.

        +Mostrar un mensaje
        +Cambiar de color
        +Lanzar una alerta
        +Etc

    Sintaxis

     target.eventListener(trigger , eventHandler)

     - target: elemento donde ocurre el evento.
     - listener: Escucha y detecta el evento.
     - trigger: La acción que ocurre en el evento.
     - handler: la función que se ejecuta al ocurrir el evento.

*/

/* 

Primero se debe de seleccionar el elemento.


*/

const button = document.getElementById("button");


/* Manejar el evento */

button.addEventListener("click" , mostrarMensaje );

/* 
Definir la función que ejecuta el eventhandler
*/

function mostrarMensaje() {
    console.log("No te salio nada :(")
}

