
tableAudio = document.createElement('audio');
tableAudio.src = 'http://www.freesound.org/data/previews/265/265296_5003039-lq.mp3'; tableAudio.volume=0.5;
const xBtn = document.getElementById('xButton').addEventListener('click', xSide);
const zeroBtn = document.getElementById('0Button').addEventListener('click', zeroSide);

function xSide() {
  tableAudio.currentTime=0.09; tableAudio.play();
  document.getElementById('Player1').innerHTML = "Player 1 choose |x| sign";
  document.getElementById('Player2').innerHTML = "Player 2 have |0| sign";
  playerOne =  "x";
  playerTwo = "0";
}

function zeroSide() {
  tableAudio.currentTime=0.09; tableAudio.play();
  document.getElementById('Player1').innerHTML = "Player 1 choose |0| sign";
    document.getElementById('Player2').innerHTML = "Player 2 have |x| sign";
    playerOne = "0";
    playerTwo = "x";
}

const my2DArray = [];
for (let i = 0; i < 3; ++i) {
  my2DArray[i] = [];
  for (let j = 0; j < 3; ++j) {
    my2DArray[i][j] = "_";
  }
}
let line = 0, col = 0, counter = 0;
let setTable = document.getElementById('table').addEventListener("click", insert)
function insert() {
  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; ++j) { 
      table.rows[i].cells[j].onclick = function () {
        tableAudio.currentTime=0.05; tableAudio.play();
        ++counter;
        line = i;
        col = j;
        getVal(this);
      };   
    }
  }
}
let flag = 1;
function getVal(cell) {
  if (flag == 1 && cell.innerHTML != "x" && cell.innerHTML != "0" ) {
    cell.innerHTML = playerOne;;
    my2DArray[line][col] = playerOne ;
    flag = 0;
  } else if (flag == 0 && cell.innerHTML != "x" && cell.innerHTML != "0" ) {
    cell.innerHTML = playerTwo;
    my2DArray[line][col] = playerTwo ;
    flag = 1;
  }
isWinner(); 
}

let draw = 0;
function isWinner(){
  if (verify() == 1) {
    if (linePlayer1 == 3 || colPlayer1 == 3 || diagOne == 3 || secDiagOne == 3) {
      document.getElementById('playerTurn').innerText = "Congratulation Player 1!!";
    } else if (linePlayer2 == 3 || colPlayer2 == 3 || diagTwo == 3 || secDiagTwo == 3) {
      document.getElementById('playerTurn').innerText = "Congratulation Player 2!!";
    } 
  } else if (draw == 9) {
    document.getElementById('playerTurn').innerText = "Draw Game!";
  } 
  }

let linePlayer1 = 0, colPlayer1 = 0 , linePlayer2 = 0, colPlayer2 = 0, diagOne = 0, diagTwo = 0, secDiagOne = 0, secDiagTwo = 0;
function verify() {
  ++draw; 
  for (let i = 0; i < 3; ++i) {
    linePlayer1 = 3, colPlayer1 = 3 , linePlayer2 = 3, colPlayer2 = 3, diagOne = 3, diagTwo = 3, secDiagOne = 3, secDiagTwo = 3;
    for (let j = 0, diagIndex = 2; j < 3; ++j, --diagIndex) {
      if(my2DArray[i][j] != playerOne) {
        --linePlayer1;
      }
      if(my2DArray[j][i] != playerOne) {
        --colPlayer1;
      }
      if(my2DArray[j][j] != playerOne) {
        --diagOne;
      }
      if(my2DArray[j][diagIndex] != playerOne) {
        --secDiagOne;
      }
      if(my2DArray[i][j] != playerTwo) {
        --linePlayer2;
      }
      if(my2DArray[j][i] != playerTwo) {
        --colPlayer2;
      }
      if(my2DArray[j][j] != playerTwo) {
        --diagTwo;
      }
      if(my2DArray[j][diagIndex] != playerTwo) {
        --secDiagTwo;
      }
    }
    if (linePlayer1 == 3 || colPlayer1 == 3 || linePlayer2 == 3 || colPlayer2 == 3 || diagOne == 3 || diagTwo == 3 || secDiagOne == 3 || secDiagTwo == 3) {
      return 1;
    } 
  }
  if (draw == 9) {
    return 2;
  }
}

const restartButton = document.getElementById('restart').addEventListener("click", restartGame);
function restartGame(){
  tableAudio.currentTime=0.05; tableAudio.play();
  for (let i = 0; i < 3; ++i) {
    my2DArray[i] = [];
    for (let j = 0; j < 3; ++j) {
      my2DArray[i][j] = "_";
    }
  }
  document.getElementById('sign').value = "";
  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; ++j) { 
      table.rows[i].cells[j].innerHTML = document.getElementById('sign').value ;
    }
  }
  draw = 0, counter = 0;
  linePlayer1 = 0, colPlayer1 = 0 , linePlayer2 = 0, colPlayer2 = 0,diagOne = 0, diagTwo = 0;
  document.getElementById('sign').value = "";
  document.getElementById('Player1').innerHTML = "Select sign!";
  document.getElementById('Player2').innerHTML  = "Select sign!";
  document.getElementById('playerTurn').innerText = "";
  flag = 1;
}
