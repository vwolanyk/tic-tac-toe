document.addEventListener('DOMContentLoaded', function(){

var boardSquares = document.querySelectorAll('td.square');


boardSquares.forEach(function(square, index){

square.style.backgroundColor = "purple";
square.addEventListener('click', function(){
  // square.style.backgroundColor = "red";
  var skull = document.createElement('img');
  skull.src = "img/skull2.jpg";
  square.append(skull);
})

})

})
