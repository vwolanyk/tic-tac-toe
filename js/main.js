document.addEventListener('DOMContentLoaded', function(){

var boardSquares = document.querySelectorAll('td.square');
var player = 1

boardSquares.forEach(function(square, index){

square.style.backgroundColor = "purple";
square.addEventListener('click', function(){

  if (player === 1){
  var skull = document.createElement('img');
  skull.src = "img/skull2.jpg";
  square.append(skull);
  return player = 2;
} else if(player === 2){
var bones = document.createElement('img');
bones.src = "img/bones.jpg";
square.append(bones);
return player = 1;
}




})

})

})
