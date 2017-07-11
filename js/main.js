document.addEventListener('DOMContentLoaded', function(){

// Def initial variables
var startButton = document.querySelector("button.start");
var newGameButton = document.querySelector("button.newgame");
var moveCount = 0;
var player = 1;

var row1var = document.getElementById("row1").children;
var row2var = document.getElementById("row2").children;
var row3var = document.getElementById("row3").children;
var column1 = [row1var[0],row2var[0],row3var[0]];
var column2 = [row1var[1],row2var[1],row3var[1]];
var column3 = [row1var[2],row2var[2],row3var[2]];
var diagLeft = [row1var[0],row2var[1],row3var[2]];
var diagRight = [row3var[0],row2var[1],row1var[2]];
var winPossibilities = [row1var,row2var,row3var, column1, column2, column3, diagLeft, diagRight];

startButton.addEventListener('click', newGame)

// Game Method? Use this or no? Called when start button clicked
function newGame(){
startButton.innerHTML = "New Game";
  // Game Variables
  var boardSquares = document.querySelectorAll('td.square');
  var board = document.querySelector("div#board");
  var playerTurn = document.querySelector("h2.player");
  var moves = document.querySelector("h2.moves");
  var win = false;

  // Reveal the Board - Initially Invisible
  board.style.display = "block";

  // Adds A line on top of board that identifies who's turn it is and how many moves
  playerTurn.innerHTML = "It's Yer Move Player: " + player;
  moveCount = 0;
  moves.innerHTML = "Total Moves: " + moveCount;

  // Iterates over each square in game board
  boardSquares.forEach(function(square, index){
    square.innerHTML = "";
    square.removeAttribute("data-value");
    // Adds a number to square(for the formula to determine WIN)
    square.classList.add("sq"+(index+1));
    // Styling - each board square purple(could add to CSS)
    square.style.backgroundColor = "purple";






// Click HAndler function for board squares
clickHandlerBoard = function(e){
    e.stopPropagation;

      if (square.innerHTML === "" ){
          if (player === 1){
            var skull = document.createElement('img');
            skull.src = 'img/skull2.jpg';
            square.setAttribute("data-value","skull")
            square.append(skull);

            square.removeEventListener('click', clickHandlerBoard);
            moveCount++;
            moves.innerHTML = "Total Moves: " + moveCount;
            player = 2;
            playerTurn.innerHTML = "It's Yer Move Player: " + player;
            } else if(player === 2){
          var bones = document.createElement('img');
          bones.src = 'img/bones.jpg';
          square.setAttribute("data-value","bones")
          square.append(bones);

          square.removeEventListener('click',clickHandlerBoard);

          moveCount++
          moves.innerHTML = "Total Moves: " + moveCount;
          player = 1;
          playerTurn.innerHTML = "It's Yer Move Player: " + player;
      }}

      winPossibilities.forEach(function(possibility){
        if (possibility[0].dataset.value === "skull" && possibility[1].dataset.value === "skull" && possibility[2].dataset.value === "skull"){ console.log("Skulls Win!");
        win = true;



      } else if(possibility[0].dataset.value === "bones" && possibility[1].dataset.value === "bones" && possibility[2].dataset.value === "bones"){  console.log("Bones Win!");
      win = true;
      }








})
}
//
  // Each square gets a click listener
  square.addEventListener('click', clickHandlerBoard);



})
};

})
