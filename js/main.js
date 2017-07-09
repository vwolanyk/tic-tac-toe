document.addEventListener('DOMContentLoaded', function(){

var boardSquares = document.querySelectorAll('td.square');
var colors = ["purple","blue","red"]
boardSquares.forEach(function(square, index){
  c = Math.ceil(Math.random() * 3);
square.style.backgroundColor = "purple";
square.addEventListener('click', function(){
  square.style.backgroundColor = "red";
})

})

})
