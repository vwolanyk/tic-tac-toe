document.addEventListener('DOMContentLoaded', function(){

// SET UP ARRAYS FROM TABLE TO calculate winPossibilities
var row1var = document.getElementById("row1").children;
var row2var = document.getElementById("row2").children;
var row3var = document.getElementById("row3").children;
var column1 = [row1var[0],row2var[0],row3var[0]];
var column2 = [row1var[1],row2var[1],row3var[1]];
var column3 = [row1var[2],row2var[2],row3var[2]];
var diagLeft = [row1var[0],row2var[1],row3var[2]];
var diagRight = [row3var[0],row2var[1],row1var[2]];
var winPossibilities = [row1var,row2var,row3var, column1, column2, column3, diagLeft, diagRight];

// GAME SET UP VARIABLES
var resetButton = document.querySelector("button.reset");
var moveCount = 0;
var player = 1;

// Game Board Variables
var boardSquares = document.querySelectorAll('td.square');
var board = document.querySelector("div#board");
var playerTurn = document.querySelector("h2.player");
var moves = document.querySelector("h2.moves");
var win = false;
var winner;

// Game Board Counts/Stats

playerTurn.innerHTML = "It's Yer Move Player: " + player;
moves.innerHTML = "Total Moves: " + moveCount;

function getSquareClickHandler(square) {

  function squareClickHandler(event){
    // Clear everything
    event.stopPropagation();
    event.preventDefault();

    if (square.innerHTML === "" && win === false ){
      if (player === 1){
        var skull = document.createElement('img');
        skull.src = 'img/skull2.jpg';
        square.setAttribute("data-value","skull")
        square.append(skull);
        moveCount++;
        moves.innerHTML = "Total Moves: " + moveCount;
        player = 2;
        playerTurn.innerHTML = "It's Yer Move Player: " + player;
      } else if (player === 2){
        var bones = document.createElement('img');
        bones.src = 'img/bones.jpg';
        square.setAttribute("data-value","bones")
        square.append(bones);
        moveCount++
        moves.innerHTML = "Total Moves: " + moveCount;
        player = 1;
        playerTurn.innerHTML = "It's Yer Move Player: " + player;
      }
      //end of if inner HTML empty
    }
    //end of if inner HTML empty

    // After A Square is Filled Check for a Win
    winPossibilities.forEach(function(possibility){
      if (possibility[0].dataset.value === "skull" && possibility[1].dataset.value === "skull" && possibility[2].dataset.value === "skull"){ console.log("Skulls Win!");
      possibility[0].classList.add("winningSquare");
      possibility[1].classList.add("winningSquare");
      possibility[2].classList.add("winningSquare");

      winBox.style.display = "block";
      winningHeading.innerHTML = 'Skullz WINS!!!';
      winningImage.src = 'img/skull2.jpg';
      winningImage.style.width = '30%';

      win = true;

    } else if(possibility[0].dataset.value === "bones" && possibility[1].dataset.value === "bones" && possibility[2].dataset.value === "bones"){  console.log("Bones Win!");
    winner = "Bones";
    possibility[0].classList.add("winningSquare");
    possibility[1].classList.add("winningSquare");
    possibility[2].classList.add("winningSquare");

    winBox.style.display = "block";
    winningHeading.innerHTML = 'Bones WINS!!!';
    winningImage.src = 'img/bones.jpg';
    winningImage.style.width = '30%';

     win = true;

    }
    // WIN POSSIBILITIES END
  });
  // WIN POSSIBILITIES END

    // Square ClickHandler END
  }
  // Square ClickHandler END
  return squareClickHandler;
}


boardSquares.forEach(function(square,index){


// ADD EVENT LISTENER TO EACH SQUARE
square.addEventListener('click', getSquareClickHandler(square));


  // End of Squares Iteration
})
// End of Squares Iteration

function resetGame(e){
  console.log('reset clicked');
  // moveCount = 0;
  // player = 1;
  // playerTurn.innerHTML = "It's Yer Move Player: " + player;
  // moves.innerHTML = "Total Moves: " + moveCount;
  // moveCount = 0;
  // player = 1;
  boardSquares.forEach(function(square,index){
    // square.removeAttribute("data-value");
    // square.innerHTML = "";
    // square.classList.remove("winningSquare");
    square.style.border = "5px solid black;"
    // winBox.style.display = "none";

    square.addEventListener('click', getSquareClickHandler(square));

  })

  // RESET GAME FUNCTION END
}
// RESET GAME FUNCTION END

resetButton.addEventListener('click', resetGame);

  //END OF DOMContentLoaded
});
// END OF DOMContentLoaded
