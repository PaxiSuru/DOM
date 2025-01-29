//Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

//Escuchador

addButton.addEventListener('click', createTask);

//Funcion Manejadora Externa

function createTask() {
    if (taskInput.value) {
        console.log(taskInput.value);
        taskInput.value = ''; //reggresamos el valor vacio al input
    } else {
        alert('¡Escribe una tarea!');
    }
}