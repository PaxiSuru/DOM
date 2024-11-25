/* 
DOM

Organiza los elementos del documento en "nodos" en un árbol jerárquico.

Nodo -> Todo elemento individual de nuestro documento.

Tipos de Nodo

1. Nodo de Documento
2. Nodo de Elemento
3. Nodo de Atributo
4. Nodo de Texto
5. Nodo de Comentarios
*/

/* 
 Nodo de Documentos

 Este nodo representa el documento completo de html. Incluye el contenido de la "raiz" - Root, hasta los elementos hijos.

 Para acceder usamos:

 -> document
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 
 Nodo Elemento

 Para seleccionar nodos de elementos, usamos:

 getElementsByTagName("etiqueta")

 Se escribe despúes del nodo "document"
*/

let title = document.getElementsByTagName("p");

console.log(title)

/* 

 Nodos de Atributo

 Son los nodos que accedemos a través de su clase o de su id.

 getElementById("nombreId")
 getElementByClassName("nombreClase")

 querySelector("nombreSelector") -> Seleccione el primer elemento que encuentre en el selector.

 querySelectorAll("nombreSelector") -> Seleccionar todos los elementos con el mismo selector.

*/

/* 
 let titulos = document.getElementById("title")

 console.log(title.innerText);
 console.log(title);
 console.log(title.id);

 let texts = document.getElementsByClassName("paragraph");

 console.log(texts);
 console.log(texts[0].textContent);
 console.log(texts[1].textContent);

 */

// let titulo = document.querySeelector("h1"); //Tag
//let titulo = document.querySelector("#title"); //Id
let parrafos = document.querySelectorAll(".paragraph"); //class

console.log(parrafos)

/* 
 Nodo de Texto

 Son los elementos de texto contenidos en las etiquetas de html.

 .innerText
 .textContent
*/

let subtitle = document.querySelector(".subtitle");
console.log(subtitle.innetText);
console.log(subtitle.textContent);

/* 
 Nodos de Comentarios

 Tienen un valor de 8 dentro del DOM
*/

let comentario = document.COMMENT_NODE;

console.log(comentario)