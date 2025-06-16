// CRONOMETRO 
let cronometro = document.getElementById("cronometro");
let empezarCronometro = document.getElementById("startTimer")
let timerCount = 0;
let timerStarted = false;
let intervalId;


empezarCronometro.addEventListener("click", function timer(){
    if(timerStarted == false){
        intervalId = setInterval(function(){
            if (timerStarted == false);
            timerStarted = true;
            timerCount++;
            console.log(timerStarted);
            empezarCronometro.innerText = ("Restart");
            cronometro.innerText = (timerCount);
        }, 1000);
    }
    else{
        clearInterval(intervalId);
        cronometro.innerText = (0);
        timerStarted = false;
        timerCount = 0;
        empezarCronometro.innerText = ("Start");

    }
});

//CREACION TABLERO

const boardCordinates = [];
const chessboard = document.getElementById("chessboard");
const letters = ["a","b","c","d","e","f","g","h"];

for (let row = 8; row >= 1; row--) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement("div");

    // ID como cell-a1, cell-b2, etc.
    const cellId = `${letters[col]}${row}`;
    cell.id = cellId;
    boardCordinates.push(cellId);

    // Color alternado: (fila + columna) % 2 === 0 ? blanco : negro
    const isWhite = (row + col) % 2 === 0;
    cell.className = isWhite ? "white" : "black";

    chessboard.appendChild(cell);
  }
}
 
//GENERADOR DE COORDENADAS

let randomCurrentCoordinate = Math.floor(Math.random() * boardCordinates.length);
let randomCurrentCoordinates = boardCordinates[randomCurrentCoordinate];
const letterSpawner = document.getElementById("letterSpawner");
const htmlCoordinate = document.getElementById(randomCurrentCoordinates);


htmlCoordinate.setAttribute("class", "green");
letterSpawner.innerText = (randomCurrentCoordinates);









