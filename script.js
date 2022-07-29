/** La idea del proyecto final es hacer un pomodoro. Esto es una tecnica de concentracion la cual consta de 4 intervalos en los cuales se divide en los pomodoros, por lo general son 25mins, 3 recreos cortos, y un recreo largo que se da al terminar el numero de intervalos elegidos. La idea es que en este caso el usuario pueda elegir el tiempo de intervalos, pomodoros, recreos cortos y largos. Ademas de esto va a tener un agregado en el cual se le preguntara al usuario que actividad desea realizar, ejemplo, si esta estudiando, si esta leyendo, si esta realizando algun tipo de trabajo, y dependiendo de la respuesta se le recomendara un tipo de pomodoro personalizado, tiempo de recreo, intervalos, etc. */

// Agregando el timer

let repeater, timer, inputs, seconds, minutes, alarm;

let pomodoro, shortBreak, longBreak;
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
            finishAlert();
        }
    }

    setTimer();
}

function stopTimer() {
    location.reload();
}

function finishAlert() {
    swal({
        title: "¡Buen trabajo!",
        text: "Terminaste un pomodoro",
        icon: "success",
        button: "Continuar",
    }).then(() => {
        stopTimer();
    });
}


// Introduciendo apis y generador de frase

const frase = document.querySelector("#frase")
const autor = document.querySelector("#autor")
const buttonNuevaFrase = document.querySelector("#button-nueva-frase")


buttonNuevaFrase.addEventListener("click", getFrase)

function getFrase() {

    let num = parseInt(Math.random() * 10);
    console.log(num)

    fetch("frases.json")
        .then((response) => response.json())
        .then((data) => {
            if (num === 0) {
                frase.innerHTML = `"${data[0].frase}"`;
                autor.innerHTML = `-${data[0].autor}`;
            } else if (num === 1) {
                frase.innerHTML = `"${data[1].frase}"`;
                autor.innerHTML = `-${data[1].autor}`;
            } else if (num === 2) {
                frase.innerHTML = `"${data[2].frase}"`;
                autor.innerHTML = `-${data[2].autor}`;
            } else if (num === 3) {
                4
                frase.innerHTML = `"${data[3].frase}"`;
                autor.innerHTML = `-${data[3].autor}`;
            } else if (num === 4) {
                5
                frase.innerHTML = `"${data[4].frase}"`;
                autor.innerHTML = `-${data[4].autor}`;
            } else if (num === 5) {
                frase.innerHTML = `"${data[5].frase}"`;
                67
                autor.innerHTML = `-${data[5].autor}`;
            } else if (num === 6) {
                frase.innerHTML = `"${data[6].frase}"`;
                autor.innerHTML = `-${data[6].autor}`;
            } else if (num === 7) {
                frase.innerHTML = `"${data[7].frase}"`;
                autor.innerHTML = `-${data[7].autor}`;
            } else if (num === 8) {
                frase.innerHTML = `"${data[8].frase}"`;
                autor.innerHTML = `-${data[8].autor}`;
            } else if (num === 9) {
                frase.innerHTML = `"${data[9].frase}"`;
                autor.innerHTML = `-${data[9].autor}`;
            }
        });
}


// Creando funcion para guardar tareas dentro del local storage

document.getElementById("formTask").addEventListener("submit", saveTask);

function saveTask(e) {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    console.log(description);

    let task = {
        title,
        description,
    };

    if (localStorage.getItem("tasks") === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    getTasks();
    document.getElementById("formTask").reset();
    e.preventDefault();
}

function deleteTask(title) {
    console.log(title);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTasks();
}

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let tasksView = document.getElementById("tasks");
    tasksView.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
    }
}

getTasks();