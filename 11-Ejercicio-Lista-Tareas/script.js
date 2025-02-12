//Referencias

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Escuchador

addButton.addEventListener('click', createTask);

//Funcion Manejadora Externa

function createTask() {
    if (taskInput.value) {
        //Crear los elementos que integran la tarea
       

        //Creamos el contenedor de una tarea
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        //Creamos el parrafo de la tarea
        const taskText = document.createElement('p');
        taskText.innerText = taskInput.value;

        //Creamos el contenedor de los iconos
        const taskIcons = document.createElement('div');
        taskIcons.classList.add('task-iconos');

        //Creamos el icono de check
        const iconCheck = document.createElement('i');
        iconCheck.classList.add('bi', 'bi-check-circle', 'icono-completar');

        //creamos icono de basura
        const iconDelete = document.createElement('i');
        iconDelete.classList.add('bi', 'bi-x-circle', 'icono-eliminar');

        //Estructura de elementos
        taskIcons.append(iconCheck, iconDelete);
        taskItem.append(taskText, taskIcons);
        taskList.append(taskItem);

        //Escuchadores de los iconos
        iconCheck.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.classList.toggle('complete');
        });

        //Definir un escuchador al elemento iconDelete
        iconDelete.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        })


        //Regresamos el valor vacio al input
        taskInput.value = '';
        
    } else {
        alert('¡Escribe una tarea!');
    }
}

const taskItem = document.createElement('div');
taskItem.classList.add('task');

console.log(taskItem.classList);

//Enter

taskInput.addEventListener('keydown', (e) => 
    {
        if (e.key === 'Enter'){
            createTask();
        }
    });