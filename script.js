/** La idea del proyecto final es hacer un pomodoro. Esto es una tecnica de concentracion la cual consta de 4 intervalos en los cuales se divide en los pomodoros, por lo general son 25mins, 3 recreos cortos, y un recreo largo que se da al terminar el numero de intervalos elegidos. La idea es que en este caso el usuario pueda elegir el tiempo de intervalos, pomodoros, recreos cortos y largos. Ademas de esto va a tener un agregado en el cual se le preguntara al usuario que actividad desea realizar, ejemplo, si esta estudiando, si esta leyendo, si esta realizando algun tipo de trabajo, y dependiendo de la respuesta se le recomendara un tipo de pomodoro personalizado, tiempo de recreo, intervalos, etc. */

// Agregando el timer

const timer = document.querySelector(".timer__container");

timer.innerHTML = `<div class="timer__container--minutos">00</div><div class="timer__container--segundos">00</div>`;

document.getElementById(`form`).addEventListener("submit", saveTask);

// Creando funcion para guardar tareas dentro del local storage

function saveTask(save) {
    let title = document.getElementById(`title`).value;
    let description = document.getElementById(`description`).value;

    const task = {
        title: title,
        description: description,
    };

    if (localStorage.getItem(`tasks`) === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem(`tasks`, JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem(`tasks`));
        tasks.push(task);
        localStorage.setItem(`tasks`, JSON.stringify(tasks));
    }

    getTasks();
    save.preventDefault();
}

// Agregando las tareas al DOM

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem(`tasks`));
    let mostrarTasks = document.getElementById(`tasks`);

    mostrarTasks.innerHTML = " ";

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        mostrarTasks.innerHTML += `<div>
                    <div>
                        <p>${title} - ${description}</p>

                       
                       <input type="button" value="Delete" onclick="deleteTask("${title}")">
                    </div>   
                </div>`;
    }
}

// funcion para eliminar tareas


getTasks();