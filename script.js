let playerOne = document.getElementById('Player1');
let playerTwo = document.getElementById('Player2');

//Alegem semnul
const butonSign = document.getElementById('signChoose').addEventListener("click", chooseSign)
function chooseSign () {
   inputSign = document.getElementById('sign').value;
   console.log(inputSign);
  if (inputSign == "x") {
    playerOne.innerText = "Player 1 choose " +  "|" + inputSign + "|" + " sign";
    playerTwo.innerHTML = "Player 2 have |0| sign";
    playerOne = inputSign;
    playerTwo = "0";
    console.log(playerOne + " <-> " + playerTwo + " Cand e X")
  } else if (inputSign == "0") {
    playerOne.innerHTML = "Player 1 choose " + "|" + inputSign + "|" + " sign";
    playerTwo.innerHTML = "Player 2 have |x| sign";
    playerOne = inputSign;
    playerTwo = "x";
    console.log(playerOne + " <-> " + playerTwo + " Cand e 0")
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

//var table = document.querySelector('table')
let setTable = document.getElementById('table').addEventListener("click", insert)
function insert() {
//if (table) {
  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    // Loop through cells in each row
    for (let j = 0; j < row.cells.length; ++j) { 
     
      table.rows[i].cells[j].onclick = function () {
        
        line = i;
        col = j;
        getVal(this);
        console.log( "Corect : " + i + "<-" + j + " \n")
        console.log( "Verificare : " + line + "<-" + col + " \n")
        
      };   
    }
  }
}
let flag = 1;
  function getVal(cell) {
    
   
   // console.log(my2DArray[line][col] + "<---|");
    if (flag == 1 && cell.innerHTML != "x" && cell.innerHTML != "0") {
      cell.innerHTML = playerOne;;
      my2DArray[line][col] = playerOne ;
      console.log(my2DArray[line][col] + "|1|<-|" + line + "<" + col + " \n");
      flag = 0;

    } else if (flag == 0 && cell.innerHTML != "x" && cell.innerHTML != "0") {
      cell.innerHTML = playerTwo;
      my2DArray[line][col] = playerTwo ;
      console.log(my2DArray[line][col] + "|2|<--|" + line + "<" + col + " \n");
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

  let drawFlag = 0;
function verify() {
  console.log(drawFlag + "<- Counterul \n")
      ++drawFlag;
      if (my2DArray[0][0] == playerOne &&  my2DArray[0][1] == playerOne &&  my2DArray[0][2] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][0] == playerTwo &&  my2DArray[0][1] == playerTwo &&  my2DArray[0][2] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      // Second Line
      if (my2DArray[1][0] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[1][2] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[1][0] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[1][2] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      //Third Line
      if (my2DArray[2][0] == playerOne &&  my2DArray[2][1] == playerOne &&  my2DArray[2][2] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[2][0] == playerTwo &&  my2DArray[2][1] == playerTwo &&  my2DArray[2][2] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      
      //COLUMNS
      //First column
      if (my2DArray[0][0] == playerOne &&  my2DArray[1][0] == playerOne &&  my2DArray[2][0] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][0] == playerTwo &&  my2DArray[1][0] == playerTwo &&  my2DArray[2][0] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      //Second column
      if (my2DArray[0][1] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][1] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][1] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][1] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      //Third Column
      if (my2DArray[0][2] == playerOne &&  my2DArray[1][2] == playerOne &&  my2DArray[2][2] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][2] == playerTwo &&  my2DArray[1][2] == playerTwo &&  my2DArray[2][2] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }

      //DIAGS
      //Princ diag
      if (my2DArray[0][0] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][2] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][0] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][2] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }
      //Sec diag
      if (my2DArray[0][2] == playerOne &&  my2DArray[1][1] == playerOne &&  my2DArray[2][0] == playerOne) {
        console.log("Congratulation Player 1!!")
        return 1;
      } else if (my2DArray[0][2] == playerTwo &&  my2DArray[1][1] == playerTwo &&  my2DArray[2][0] == playerTwo) {
        console.log("Congratulation Player 2!!")
        return 2;
      }

      if ( drawFlag == 27) {
        return 3;
      }
}
console.log(my2DArray  );

const restartButton = document.getElementById('restart').addEventListener("click", restartGame);
function restartGame(){
  /*for (let i = 0; i < rows; ++i) {
    my2DArray[i] = [];
    for (let j = 0; j < columns; ++j) {
      my2DArray[i][j] = "_";
    }
  }*/


  for (let i = 0; i < table.rows.length; ++i) { 
    let row = table.rows[i];
    // Loop through cells in each row
    for (let j = 0; j < row.cells.length; ++j) { 
     
      table.rows[i].cells[j].innerHTML = ''  ;
    }
  }
  document.getElementById('sign').value = "";
  document.getElementById('Player1').innerText = "";
  document.getElementById('Player2').innerHTML = "";
  document.getElementById('playerTurn').innerText = "";
}
