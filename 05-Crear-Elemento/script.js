//alert ("Quiero mimir")

/* 
Obtenemos un elemento de referencia.

-Este es el nodo de HTML donde vamos a crear un nuevo elemento.
*/

const movies = document.getElementById("movies");

/* 
Crear un nuevo elemento usando createElement

 document.createElement(tipoElemento)

-El tipo de elemento pasa como string "" o ''
-Se debe guardar en una variable o constante
*/

const newMovie = document.createElement("li")

/* 
Agregamos el elemento al DOm desde la referencia, usamos el metodo append()

 elementoReferencia.append(nuevoElemento)

-El nuevo elemento no pasa por string.
*/

movies.append(newMovie)

/* 
Agregamos texto al nuevo elemento con innerText

 elemento.innerText = valor

-El valor pasa como string "" o ''
*/

newMovie.innerText = "🐺The Children Wolf";

/* 
Agregamos las clases al nuevo elemento con el método add()

 elemento.classList.add(clase)

-La clase pasa como string.
-El metodo acepta más de un parametro separandolos con comas ,
*/

newMovie.classList.add("list-item" , "bg-one")

/* 
 Reto, agregamos un 6 elemento solitas y solitos.
*/

newMovie.classList.add("list-item" , "bg-two")

const movies2 = document.getElementById("movies");

const newMovie2 = documet.createElement("li")

movies2.append(newMovie2)
newMovie2.innerText = "💧 Elementos 🔥"
newMovie2.classList.add("list-item" , "bg-two)");