//CREATE THE BOARD

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const CELLS = []
const COORDINATES = []
const CHESSBOARD = document.getElementById('chessboard');
const STARTGAME = document.getElementById('startgame')
const SCORETEXT = document.getElementById('score')
const CHESSSOUND = new Audio('../sounds/move-self.mp3')
let score = 0

function createboard() {
    for (let i = 8; i >= 1; i--) {
        for (let j = 0; j < 8; j++) {
            
            const cell = document.createElement('div');
            const id = `${LETTERS[j]}${i}`;
            cell.id = id;

            CHESSBOARD.appendChild(cell);

            // PAINT THE GRID
            if ((j + i) % 2 === 0) {
                cell.classList.add('black'); 
            } else {
                cell.classList.add('white'); 
            }

            // CREATES THE TEXT WITH THE COORDINATE FOR EVERY CELL AND HIDES IT
            const coordinate = document.createElement('p');
            coordinate.id = `p${id}`;
            coordinate.innerText = id;
            cell.appendChild(coordinate);

            // ADDS EVERY CELL HTML AND EVERY COORDINATE TO ARRAYS
            CELLS.push(cell);
            COORDINATES.push(coordinate);
        }
    }
}

createboard();


//CREATE THE TIMER

const TIMER = document.getElementById('timer')
let time = 0
let intervalId;
STARTGAME.addEventListener('click', function(){   
    if(intervalId){
            clearInterval(intervalId);
            TIMER.innerText = 'Time : 0'
            intervalId = undefined
            COORDINATES.forEach(element => {
        element.hidden = false;
    }); 
            return
        }
        
        COORDINATES.forEach(element => {
        element.hidden = true;
    }); 
        time = 0;
        intervalId = setInterval(() =>{
        time++
        TIMER.innerText = `Time : ${time}`

    },1000)
})


//MAKES THE isOn Variable CHANGE AND REWRITES THE TEXT IN THE BUTTON

STARTGAME.addEventListener('click', function(){
    if(intervalId){
        STARTGAME.innerText = 'Stop game'
        return
    }
    if(!intervalId){
        STARTGAME.innerText = 'Start game'
        return
    }
    
})


// Selects a random cell from 

function randomCellGenerator(){
    if(!intervalId){
        return
    }
    //GET A RANDOM NUMBER AN SELECTS A CELL
    const cordsPlaying = document.getElementById('cordsPlaying')
    let randomNumber = Math.floor(Math.random() * CELLS.length)
    let currentCell = CELLS[randomNumber];

    //INDICATES WHICH CELL WE ARE LOOKING FOR
    cordsPlaying.innerText = currentCell.id;

    //TO THE CURRENT CELL ADDS AN EVENT LISTENER WITH THE CLICK, CHANGES ITS COLOR
    currentCell.addEventListener('click', function startCell(){
        let colorBefore = currentCell.classList[0]
        currentCell.classList.add('Green')
        score++
        SCORETEXT.innerText = `Score : ${score}`
        COORDINATES[randomNumber].hidden = false;
        CHESSSOUND.play()

        setTimeout(function(){
            currentCell.classList.remove('Green')
            currentCell.classList.add(colorBefore)
            currentCell.removeEventListener('click', startCell)
            COORDINATES[randomNumber].hidden = true;
            randomCellGenerator();
            
        },750)
        
    })
    
    



    return currentCell;
}


// Adds the function to the button

STARTGAME.addEventListener('click', randomCellGenerator)