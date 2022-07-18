/** La idea del proyecto final es hacer un pomodoro. Esto es una tecnica de concentracion la cual consta de 4 intervalos en los cuales se divide en los pomodoros, por lo general son 25mins, 3 recreos cortos, y un recreo largo que se da al terminar el numero de intervalos elegidos. La idea es que en este caso el usuario pueda elegir el tiempo de intervalos, pomodoros, recreos cortos y largos. Ademas de esto va a tener un agregado en el cual se le preguntara al usuario que actividad desea realizar, ejemplo, si esta estudiando, si esta leyendo, si esta realizando algun tipo de trabajo, y dependiendo de la respuesta se le recomendara un tipo de pomodoro personalizado, tiempo de recreo, intervalos, etc. */

// Agregando el timer

let repeater, timer, inputs, seconds, minutes, alarm;

window.addEventListener(`load`, () => {
    inputs = Array.from(document.getElementsByClassName(`number`));
    timer = document.querySelector(`.timer`);
    alarm = new Audio(`sound/short-alarm-clock-sound.mp3`);
});

function starTimer() {
    parseTime();
    setTimer();
    countDown();
}

function parseTime() {
    minutes = Number(inputs[0].value);
    seconds = Number(inputs[1].value);

}

function setTimer() {
    timer.innerHTML = `<p class="number">${
    minutes > 9 ? minutes : "0" + minutes
  }</p><span>:</span><p class="number">${
    seconds > 9 ? seconds : "0" + seconds
  }</p>`;

    document.title = `${minutes > 9 ? minutes : "0" + minutes}:${
    seconds > 9 ? seconds : "0" + seconds
  }`;
}

function countDown() {
    repeater = setInterval(runner, 1000);
}

function runner() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            alarm.play();
        }
    }

    setTimer();
}

let pomodoro, shortBreak, longBreak;



pomodoro = document.getElementsByClassName(`pomodoro`);
shortBreak = document.getElementsByClassName(`short-break`);
longBreak = document.getElementsByClassName(`long-break`);

console.log(pomodoro)



// Creando funcion para guardar tareas dentro del local storage

document.getElementById(`form`).addEventListener("submit", saveTask);

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

function stopTimer() {
    location.reload();
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
                       
                       <a onclick="deleteTask("${title}")">Delete</a>
                    </div>   
                </div>`;
    }
}

function deleteTask(title) {
    clearInterval(repeater);
    console.log(title);
}

// funcion para eliminar tareas

getTasks();