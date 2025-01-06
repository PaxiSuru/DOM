/* Handler - Funciones
 El Handler dentro de un evento es una función que se ejecuta cuando el evento ocurre.

 Hay tres formas de escribir la función handler.
    1. Como una función externa
    2. Como una función anónima
    3. Como una función Flecha

    function handler() {
        //Codigo a ejecutar
    }
    

*/

//Referencias

const externa = document.getElementById('externa');
const anonima = document.getElementById('anonima')
;
const flecha = document.getElementById('flecha')
//función externa

function funcionExterna() {
    console.log("Click en el botón externo ✨🌿")
};

externa.addEventListener('click', funcionExterna);

//Función Anonima

anonima.addEventListener('click', function(){
    console.log('Click en el botón Anonimo 🕶️✨')
});

//Funcion Flecha

flecha.addEventListener('click', () => {
    console.log('Click en el botón flecha ➡️')
});