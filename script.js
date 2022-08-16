// Agregando el timer

let start = document.getElementById(`play`);
let stop = document.getElementById(`stop`);
let reset = document.getElementById(`reset`);

let minutes = document.getElementById(`minutes`)
let seconds = document.getElementById(`seconds`)

let pomodoro = document.getElementById(`btn-pomodoro`)
let shortBreak = document.getElementById(`btn-short-break`)
let longBreak = document.getElementById(`btn-long-break`)

let momento = document.getElementById(`momento`);
let intervalo = document.getElementById(`intervalo`)

let alarm = new Audio(`sound/alarm.wav`);
alarm.loop = false;

let startTimer;



start.addEventListener(`click`, function() {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        swal(`El contador esta corriendo`)
    }
})

pomodoro.addEventListener(`click`, function() {
    minutes.innerText = 25;
    seconds.innerText = "00";

    momento.innerText = "pomodoro";

    if (minutes.innerText == 0 && seconds.innerText == 0) {
        finishAlert()
    }
})

shortBreak.addEventListener(`click`, function() {
    minutes.innerText = "05";
    seconds.innerText = "00";

    momento.innerText = "short break";
})

longBreak.addEventListener(`click`, function() {

    minutes.innerText = 15;
    seconds.innerText = "00";

    momento.innerText = "long break";



})

// Reset
reset.addEventListener(`click`, function() {
    if (momento.innerText == "pomodoro") {
        minutes.innerText = 25;
        seconds.innerText = "00";

        stopInterval()
        startTimer = undefined;
    } else if (momento.innerText == "short break") {
        minutes.innerText = "05";
        seconds.innerText = "00";

        stopInterval()
        startTimer = undefined;
    } else if (momento.innerText == "long break") {
        minutes.innerText = "15";
        seconds.innerText = "00";

        stopInterval()
        startTimer = undefined;
    }



})

// Stop

stop.addEventListener(`click`, function() {
    stopInterval();
    startTimer = undefined;
})

// Start

function timer() {
    // Pomodoro countdown
    if (seconds.innerText != 0) {
        seconds.innerText--;
    } else if (minutes.innerText != 0 && seconds.innerText == 0) {
        seconds.innerText = 59;
        minutes.innerText--;
    } else {
        alarm.play();
        finishAlert();


    }
}



function stopInterval() {
    clearInterval(startTimer);
}

function finishAlert() {
    if (momento.innerText == "pomodoro" && intervalo.innerText < 4) {
        swal({
            title: "¡Buen trabajo!",
            text: "Terminaste un pomodoro",
            icon: "success",
            button: "Continuar",
        }).then(() => {
            intervalo.innerHTML++;

            momento.innerText = "short break"

            minutes.innerText = "05";
            seconds.innerText = "00";

            stopInterval();
            startTimer = undefined;
        })
    } else if (momento.innerText == "pomodoro" && intervalo.innerText == 4) {
        swal({
            title: "¡Buen trabajo, terminaste 4 pomdoros!",
            text: "¡Hora del long break!",
            icon: "success",
            button: "Continuar",
        }).then(() => {
            momento.innerText = "long break"

            minutes.innerText = "15";
            seconds.innerText = "00";

            stopInterval()
            startTimer = undefined;

            intervalo.innerText = 0;
        })
    } else if (momento.innerText == "short break") {
        swal({
            title: "¡Short break terminado!",
            text: "Volvamos al trabajo!",
            icon: "success",
            button: "Continuar",
        }).then(() => {
            momento.innerText = "pomodoro"

            minutes.innerText = "25";
            seconds.innerText = "00";

            stopInterval();
            startTimer = undefined;
        })

    } else if (momento.innerText == "long break") {
        swal({
            title: "¡Long break terminado!",
            text: "Hora de la vuelta al trabajo",
            icon: "success",
            button: "Continuar",
        }).then(() => {
            momento.innerText = "pomodoro";

            minutes.innerText = "25";
            seconds.innerText = "00";

            stopInterval()
            startTimer = undefined;

            intervalo.innerText = 0;
        })
    }
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

        tasksView.innerHTML += `<div class="card card-task">
        <div class="card-body card-body-task">
          <p>${title} - ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-delete ml-5">Delete</a>
          </p>
        </div>
      </div>`;
    }
}

getTasks();

// Introduciendo apis y generador de frase

const frase = document.querySelector("#frase");
const autor = document.querySelector("#autor");
const buttonNuevaFrase = document.querySelector("#button-nueva-frase");



buttonNuevaFrase.addEventListener("click", getFrase);



function getFrase() {

    let num = parseInt(Math.random() * 10);
    console.log(num);

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
                4;
                frase.innerHTML = `"${data[3].frase}"`;
                autor.innerHTML = `-${data[3].autor}`;
            } else if (num === 4) {
                5;
                frase.innerHTML = `"${data[4].frase}"`;
                autor.innerHTML = `-${data[4].autor}`;
            } else if (num === 5) {
                frase.innerHTML = `"${data[5].frase}"`;
                67;
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