

//Referencias

const padre = document.getElementById('parent');
const hijo = document.getElementById('child');
const hermano = document.getElementById('sibling');

//parentNode -> Devuelve el nodo padre del elemento.

console.log(hijo.parentNode);

//childNodes -> Devuelve una colección (NodeList) de todos los nodos hijos, incluyendo elementos, texto, comentarios.

console.log(padre.childNodes);

//children -> Devuelve una colección (HTML Collection)  de los nodos hijos que son elementos. Ignora nodos de texto o comentarios.

console.log(padre.children);

//firstchild -> Devuelve el primer nodo hijo, puede ser un nodo de texto, comentario o elemento.

console.log(padre.firstChild);

//firstElementChild -> Devuelve el primer nodo hijo que sea un elemento.

console.log(padre.firstElementChild);

//lastChild -> Devuelve el ultimo nodo hijo, puede ser nodo de texto, comentario o elemento.

console.log(padre.lastChild);

//lastElementChild -> Devuelve el ultimo nodo hijo que sea un elemento.

console.log(padre.lastElementChild);

//nextSibling -> Devuelve el siguiente nodo hermano, puede ser nodo de texto, comentario o elemento.

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

//nextElementSibling -> Devuelve el siguiente nodo hermano que sea un elemento.

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

//previousSibling -> Devuelve el anterior nodo hermano, puede ser un nodo de texto, comentario o elemento.

console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

//previousElementSibling -> Devuelve el anterior nodo hermano que sea un elemento.

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);