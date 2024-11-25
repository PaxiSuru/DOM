/* 
 Seleccionar el elemento h1 a través de su clase.
*/

const titulo = document.querySelector(".titulo");

/* 
 Mostramos el nodo seleccionado.

 - Nodo expandido -> <h1>...<h1>
 - Nodo abstracto -> h1.title

 Algunos navegadores optimizan la representación de los nodos en las consolas (Chrome)
*/

console.log(titulo)

/* 
 Objeto Style

 Accedemos a el usando la notación de punto (.)
    elemento.style
 El resultado de esto es CSS Style Declaration. Es una lista que representa todas las propiedades.
*/

console.log(titulo.style)

/* 
 Propiedades de Estilo

 Accedemos a las propiedades usando la notación de punto (.)

 Sintaxis:

  elemento.style.nombrePropiedad

 A diferencia de CSS, las propiedades de estilo en JS las escribimos usando el formato "camelCase"

    CSS -> background-color (kebab-case)
    JS -> backgroundColor (camelCase)
*/

console.log("Valores en línea.Color:" + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor)