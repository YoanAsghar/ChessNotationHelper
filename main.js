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


//CRECION DE FUNCION CRONOMETRO

let gameStarted = false;
const botonStart = document.getElementById("startGame")
const textoHTMLCronometro = document.getElementById("cronometro")
let inicioCronometro = 0;
IntervalId = "";

botonStart.addEventListener("click", function(){
  if(gameStarted == false){
    gameStarted = true;
    IntervalId = setInterval(() => {
      inicioCronometro++
      textoHTMLCronometro.innerText = (inicioCronometro);
      botonStart.innerText = ("Restart")
    }, 1000);
    
  }
  else{
    gameStarted = false;
    textoHTMLCronometro.innerText = (0);
    clearInterval(IntervalId);
    inicioCronometro = 0;
  }
})

//CREACION DE COORDENADAS ALEATORIAS

let textoHTMLconCoordenadas = document.getElementById("letterSpawner")
let valorAleatorioDelTablero = Math.floor(Math.random() * boardCordinates.length);  // UN VALOR MATEMATICO ENTRE 1 Y 64
let cordenadaAleatoriaDelTablero = boardCordinates[valorAleatorioDelTablero]; // ELIGE LA CORDENADA ALEATORIA EN ESA POSICION
let piezaDelTablero = document.getElementById(cordenadaAleatoriaDelTablero);  //SELECCIONA EL DIV EN EL QUE ESTA ESA PIEZA
textoHTMLconCoordenadas.innerText = (cordenadaAleatoriaDelTablero);



