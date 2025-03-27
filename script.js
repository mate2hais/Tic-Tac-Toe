tableAudio = document.createElement('audio');
tableAudio.src = 'http://www.freesound.org/data/previews/265/265296_5003039-lq.mp3'; tableAudio.volume=0.5;
let xCount = 0, zeroCount = 0;
const xBtn = document.getElementById('xButton').addEventListener('click', xSide);
const zeroBtn = document.getElementById('0Button').addEventListener('click', zeroSide);

function xSide() {
  tableAudio.currentTime=0.09; tableAudio.play();
  ++xCount;
}

function zeroSide() {
  tableAudio.currentTime=0.09; tableAudio.play();
  ++zeroCount;
}

const butonSign = document.getElementById('signChoose').addEventListener("click", chooseSign)
function chooseSign () {
  tableAudio.currentTime=0.09; tableAudio.play();
  if (xCount) {
    document.getElementById('Player1').innerHTML = "Player 1 choose |x| sign";
    document.getElementById('Player2').innerHTML = "Player 2 have |0| sign";
    playerOne =  "x";
    playerTwo = "0";
  } else if (zeroCount) {
    document.getElementById('Player1').innerHTML = "Player 1 choose |0| sign";
    document.getElementById('Player2').innerHTML = "Player 2 have |x| sign";
    playerOne = "0";
    playerTwo = "x";
  }
}

const my2DArray = [];
const rows = 3;
const columns = 3;
for (let i = 0; i < rows; ++i) {
  my2DArray[i] = [];
  for (let j = 0; j < columns; ++j) {
    my2DArray[i][j] = "_";
  }
}
let line = 0;
let col = 0;

let setTable = document.getElementById('table').addEventListener("click", insert)
function insert() {
  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; ++j) { 
      table.rows[i].cells[j].onclick = function () {
        tableAudio.currentTime=0.05; tableAudio.play();
        line = i;
        col = j;
        getVal(this);
      };   
    }
  }
}

let flag = 1;
function getVal(cell) {
  if (flag == 1 && cell.innerHTML != "x" && cell.innerHTML != "0") {
    cell.innerHTML = playerOne;;
    my2DArray[line][col] = playerOne ;
    flag = 0;
  } else if (flag == 0 && cell.innerHTML != "x" && cell.innerHTML != "0") {
    cell.innerHTML = playerTwo;
    my2DArray[line][col] = playerTwo ;
    flag = 1;
  }
  if (verify() == 1) {
    document.getElementById('playerTurn').innerText = "Congratulation Player 1!!";
  } else if (verify() == 2) {
    document.getElementById('playerTurn').innerText = "Congratulation Player 2!!";
  } else if (verify() == 3) {
    document.getElementById('playerTurn').innerText = "Draw Game!";
  }
}

let draw = 0;
function verify() {
  ++draw; 
  if (my2DArray[0][0] ==  my2DArray[0][1]  &&  my2DArray[0][1] == my2DArray[0][2]) {
    return 1;
  } else if (my2DArray[0][0] == playerTwo &&  my2DArray[0][1] == playerTwo &&  my2DArray[0][2] == playerTwo) {
    return 2;
  }
  if (my2DArray[1][0] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[1][2] == playerOne) {
    return 1;
  } else if (my2DArray[1][0] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[1][2] == playerTwo) {
    return 2;
  }
  if (my2DArray[2][0] == playerOne &&  my2DArray[2][1] == playerOne &&  my2DArray[2][2] == playerOne) {
    return 1;
  } else if (my2DArray[2][0] == playerTwo &&  my2DArray[2][1] == playerTwo &&  my2DArray[2][2] == playerTwo) {
    return 2;
  }
  if (my2DArray[0][0] == playerOne &&  my2DArray[1][0] == playerOne &&  my2DArray[2][0] == playerOne) {
    return 1;
  } else if (my2DArray[0][0] == playerTwo &&  my2DArray[1][0] == playerTwo &&  my2DArray[2][0] == playerTwo) {
    return 2;
  }
  if (my2DArray[0][1] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][1] == playerOne) {
    return 1;
  } else if (my2DArray[0][1] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][1] == playerTwo) {
    return 2;
  }
  if (my2DArray[0][2] == playerOne &&  my2DArray[1][2] == playerOne &&  my2DArray[2][2] == playerOne) {
    return 1;
  } else if (my2DArray[0][2] == playerTwo &&  my2DArray[1][2] == playerTwo &&  my2DArray[2][2] == playerTwo) {
    return 2;
  }
  if (my2DArray[0][0] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][2] == playerOne) {
    return 1;
  } else if (my2DArray[0][0] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][2] == playerTwo) {
    return 2;
  }
  if (my2DArray[0][2] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][0] == playerOne) {
    return 1;
  } else if (my2DArray[0][2] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][0] == playerTwo) {
    return 2;
  }
  if ( draw == 27) {
    return 3;
  }
}

const restartButton = document.getElementById('restart').addEventListener("click", restartGame);
function restartGame(){
  for (let i = 0; i < rows; ++i) {
    my2DArray[i] = [];
    for (let j = 0; j < columns; ++j) {
      my2DArray[i][j] = "_";
    }
  }
  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; ++j) { 
      table.rows[i].cells[j].innerHTML = ''  ;
    }
  }
  draw = 0, xCount = 0, zeroCount = 0;
  document.getElementById('sign').value = "";
  document.getElementById('Player1').innerHTML = ".";
  document.getElementById('Player2').innerHTML  = ".";
  document.getElementById('playerTurn').innerText = "";
  flag = 1;
}
