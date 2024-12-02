/* 
 Seleccionamos los elementos de su id.
*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/* 
 Los mostramos por consola.
*/

console.log(titulo)
console.log(lista)

/* 
InnerText

 Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.innerText
*/

console.log(">>> Con innerText")
console.log(titulo.innerText)
console.log(lista.innerText)

/* 
TextContent

 Devuelve un "string" del contenido visible dentro de un elemento.

    elemento.textContent
 -Incluye los espacios
 -Incluye los elementos ocuotos
 -Excluye las etiquetas html
*/

console.log(">>> Con textContent")
console.log(titulo.textContent)
console.log(lista.textContent)

/* 
 innerHTML

 Devuelve un "string" con la estructura interna de el elemento seleccionado.

    elemento.innerHTML
*/

console.log(">>> Con innerHTML")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)

/* 
Modificar el contenido con innerText

 Asignamos el valor al elemento seleccionado.

    elemento.innerText = "string"
*/

titulo.innerText = " Los Pokémon ✨";
lista.innerText = "No existen los Pokémon :("

/* 

*/

titulo.textContent = "Mis Pokémon Favoritos 💖";
lista.textContent = "Cargando..."

/* 
Modificar el contenido con InnerHTML

 Asignamos el valor al elemento seleccionado incluyendo las etiquetas html.

    elemento.innerHTML = "<tag>...</tag>"
*/

titulo.innerHTML = "¡Amigos <span>Pokémon</span>!"
lista.innerHTML = "<li>Squirtle 🐢</li> <li>Mimikyu👻</li> <li>Rapidash Galar</li>"

/* 
 getAtrribute()

 Devuelve el valor del atributo del elemento.

 elemento.getAttribute(atributo)
*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"))

/* 
 removeAtribute ()

 Elimina el valor del atributo de un elemento.

  elemento.removeAttribute(atributo)
 */

enlace [0].removeAttribute("href");
console.log(enlace[0].getAttribute("href"))

/* 
 setAttribute()

 Asigna un atributo y un valor a un elemento.

   elemento.setAttribute(atributo, valor)

 -Sobreescribir un atributo ya declarado.
 -Crear un nuevo atributo y su valor.
*/

enlace[0].setAttribute("href", "https://youtu.be/fUsyjkmELHY?si=uOzrbUyjj4xjMNj2");

console.log(enlace[0].getAttribute("href"));

/* Antes */

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target", "_blank");

/* Despúes */

console.log(enlace[0].getAttribute("target"));