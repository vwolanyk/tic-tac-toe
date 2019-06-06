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
var winning = document.createElement("div")
var winningHeading = document.createElement("h1")

// Game Board Counts/Stats
function currentPlayer(player){
  if (player === 1){
    return "SKULLZ"
  } else {
    return "BOWNZ"
  }
};

playerTurn.innerHTML = currentPlayer(player) + " MOVE";
moves.innerHTML = "Total Moves: " + moveCount;

boardSquares.forEach(function(square,index){

  function squareClickHandler(event){
    // Clear everything
    event.stopPropagation;
    event.preventDefault;

    if (square.innerHTML === "" && win === false){
      if (player === 1){
        var skull = document.createElement('img');
        skull.src = 'img/skull2.jpg';
        square.setAttribute("data-value","skull")
        square.append(skull);

        moveCount++;
        moves.innerHTML = "Total Moves: " + moveCount;
        player = 2;
        playerTurn.innerHTML = currentPlayer(player) + " MOVE";
      } else if (player === 2){
        var bones = document.createElement('img');
        bones.src = 'img/bones.jpg';
        square.setAttribute("data-value","bones")
        square.append(bones);

        moveCount++
        moves.innerHTML = "Total Moves: " + moveCount;
        player = 1;
        playerTurn.innerHTML = currentPlayer(player) + " MOVE";
      }
      //end of if inner HTML empty
    }
    //end of if inner HTML empty
    tie();
    // After A Square is Filled Check for a Win
    winPossibilities.forEach(function(possibility){
      if (possibility[0].dataset.value === "skull" && possibility[1].dataset.value === "skull" && possibility[2].dataset.value === "skull"){ console.log("Skulls Win!");
      possibility[0].style.border = "10px solid red";
      possibility[1].style.border = "10px solid red";
      possibility[2].style.border = "10px solid red";

      winningHeading.innerHTML = 'Skullz WINS!!!';
      var skullWinnerImage = skull.cloneNode(true);
      skullWinnerImage.style.width = '30%';
      winning.append(winningHeading);
      winning.append(skullWinnerImage);
      board.append(winning);

      return win = true;

    } else if(possibility[0].dataset.value === "bones" && possibility[1].dataset.value === "bones" && possibility[2].dataset.value === "bones"){  console.log("Bones Win!");
    winner = "Bones";
    possibility[0].style.border = "10px solid red";
    possibility[1].style.border = "10px solid red";
    possibility[2].style.border = "10px solid red";

    winningHeading.innerHTML = 'Bones WINS!!!';
    var boneswinnerImage = bones.cloneNode(true);
    boneswinnerImage.style.width = '30%';
    winning.append(winningHeading);
    winning.append(boneswinnerImage);
    board.append(winning);
    return win = true;

    }
    // WIN POSSIBILITIES END
  });
  // WIN POSSIBILITIES END
  function tie(){
    if (moveCount === 9){

      winningHeading.innerHTML = 'TIE';
      winning.append(winningHeading);
      board.append(winning);
      return win = true;
    }
  }


    // Square ClickHandler END
  }
  //

// ADD EVENT LISTENER TO EACH SQUARE
square.addEventListener('click', squareClickHandler);


  // End of Squares Iteration
})
// End of Squares Iteration



function resetGame(e){
  console.log('reset clicked');

  win = false;

  boardSquares.forEach(function(square,index){
    square.removeAttribute("data-value");
    square.innerHTML = "";
    square.classList.remove("winningSquare");
    square.style = "";
    winning.innerHTML = "";
    winBox.style.display = "none";
    moveCount = 0;
    player = 1;
    playerTurn.innerHTML = currentPlayer(player) + " MOVE";
    moves.innerHTML = "Total Moves: " + moveCount;

  })

  // RESET GAME FUNCTION END
}
// RESET GAME FUNCTION END

resetButton.addEventListener('click', resetGame);



  //END OF DOMContentLoaded
});
// END OF DOMContentLoaded
