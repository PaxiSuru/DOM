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

/* 
Metodo de Propiedad

 Asigna el valor de la propiedad de estilo en el elemento seleccionado.

   elemento.style.nombrePropiedad = "valor"

 -Forma más directa y legible de asignar propiedades.
 -Solo admite asignar propiedades con el formato CamelCase.
*/

titulo.style.color = "blue";
titulo.style.backgroundColor = "pink";

console.log("Valores asignados con JS. Color:" + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor);

/* 
Método setProperty()

 Asignamos una propiedad de estilo al elemento seleccionado.

   elemento.style.setProperty(nombrePropiedad, valor, important)

 - Más flexible y poderoso.
 - Las propiedades se escriben en formato kebab-case.
 - Parrametro "important" es opcional.
*/

titulo.style.setProperty("color", "lightblue");
titulo.style.setProperty("background-color", "purple", "important");

console.log("Valores asignados con serProperty. Color " + titulo.style.color + "- Fondo: " + titulo.style.backgroundColor);

/* 
Eliminar valores de propiedades

 Usamos el método de propiedad y le definimos una cadena de texto vacía.

   elemento.style.nombrePropiedad = ""

 Esto elimina los valores previamente definidos en JS y en los estilos en línea.
*/

/* titulo.style.color = "";
titulo.style.backgroundColor = ""; */

/* 
Método removeProperty()

 Esto elimina la propiedad de estilo.

   elemento.style.removeProperty(nombrePropiedad)

 -Las propiedades se pasan en formato kebab-case
*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");