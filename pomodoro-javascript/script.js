/** La idea del proyecto final es hacer un pomodoro. Esto es una tecnica de concentracion la cual consta de 4 intervalos en los cuales se divide en los pomodoros, por lo general son 25mins, 3 recreos cortos, y un recreo largo que se da al terminar el numero de intervalos elegidos. La idea es que en este caso el usuario pueda elegir el tiempo de intervalos, pomodoros, recreos cortos y largos. Ademas de esto va a tener un agregado en el cual se le preguntara al usuario que actividad desea realizar, ejemplo, si esta estudiando, si esta leyendo, si esta realizando algun tipo de trabajo, y dependiendo de la respuesta se le recomendara un tipo de pomodoro personalizado, tiempo de recreo, intervalos, etc. */

// let elegirActividad = prompt(
//     "Elija dentro de las siguientes opciones y se le recomendara un tiempo segun la actividad que realice. Ingrese el numero de la opcion. 1- Lectura 2- Trabajo 3- Estudio 4-Personalizado"
// );

// switch (elegirActividad) {
//     case "1":
//         alert(
//             "El tiempo recomendado para lectura es 25 minutos de pomodoro, 5 minutos de short break, 10 minutos de long break con 3 intervalos"
//         );
//         break;
//     case "2":
//         alert("El tiempo recomendado para trabajo es 30 minutos de pomodoro, 7 minutos de short break, 15 minutos de long break con 4 intervalos");
//         break;
//     case "3":
//         alert("El tiempo recomendado para estudio es de 30 minutos de pomodoro, 7 minutos de short break y 10 minutos de long break con 4 intervalos");
//         break;
//     case "4":
//         let tiempoDePomodoro = parseInt(prompt("Ingrese el tiempo de pomodoro que desea en minutos"))
//         let tiempoDeShortBreak = parseInt(prompt("Ingrese el tiempo de short break que desea en minutos"))
//         let tiempoDeLongBreak = parseInt(prompt("Ingrese el tiempo de long break que desea en minutos"))
//         let numeroDeIntervalos = parseInt(prompt("Ingrese los intervalos que desea"))

//         class Pomodoro {
//             constructor(pomodoro, shortBreak, longBreak, intervalos) {
//                 this.pomodoro = pomodoro;
//                 this.shortBreak = shortBreak;
//                 this.longBreak = longBreak;
//                 this.intervalos = intervalos;
//             }
//         }

//         let pomodoroPersonalizado = new Pomodoro(tiempoDePomodoro, tiempoDeShortBreak, tiempoDeLongBreak, numeroDeIntervalos)

//         alert(`El tiempo de pomodoro es de ${pomodoroPersonalizado.pomodoro} minutos, el short break de ${pomodoroPersonalizado.shortBreak} minutos, el de long break de ${pomodoroPersonalizado.longBreak} minutos, y el numero de intervalos ${pomodoroPersonalizado.intervalos}`)

//         break;
// }

// Agregando el timer

const timer = document.querySelector(".timer__container");

timer.innerHTML = `<div class="timer__container--minutos">00</div><div class="timer__container--segundos">00</div>`;

// Creando agregador de tareas

const inputTarea = document.querySelector(".input__tarea")

const tareas = document.querySelector(".tareas");

const buttonAdd = document.querySelector(".button1");





buttonAdd.addEventListener("click", () => {
    const li = document.createElement("li");

    li.innerText = "Tarea agreagada";

    tareas.append(li);


});