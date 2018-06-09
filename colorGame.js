var squares = document.querySelectorAll(".square");
var newColorButton = document.querySelector("#newColorButton");
var hardButton = document.querySelector("#hardButton");
var easyButton = document.querySelector("#easyButton");
var correctRGB;
var hardMode = true;
var easyMode = false;

//use to get a random integer
//e.i. getRandomInt(255) returns an integer in between 0-249
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//set the random colors to the squares
//then pick one of those colors to be the correct answer
function colorSquaresRandomly(){
     if(hardMode){
          //traverse through all squares
          for (var i = 0; i < squares.length; i++) {
               //get a random color and set it to the background of the square
               squares[i].style.backgroundColor = getRandomColor();
          }
     }
     else if(easyMode) {
          //traverse through half the squares
          for (var i = 0; i < squares.length/2; i++) {
               //get a random color and set it to the background of the square
               squares[i].style.backgroundColor = getRandomColor();
          }
     }

     selectCorrectColor();
}

//implement the "New Color" button
function getNewColors(){
     newColorButton.addEventListener("click", colorSquaresRandomly);
     newColorButton.addEventListener("click", resetValues);
}

// implement the "Easy" and "Hard" buttons
function setDifficulty(){
     easyButton.addEventListener("click", function(){
          for (var i = squares.length/2; i < squares.length; i++) {
               squares[i].style.display = "none";
          }
          if(easyMode === false){
               resetValues();
               hardMode = false;
               easyMode = true;
               colorSquaresRandomly();
          }
          this.classList.add("invertColors");
          hardButton.classList.remove("invertColors");
     });
     hardButton.addEventListener("click", function(){
          for (var i = squares.length/2; i < squares.length; i++) {
               squares[i].style.display = "block";
          }
          if(hardMode === false){
               resetValues();
               hardMode = true;
               easyMode = false;
               colorSquaresRandomly();
          }
          this.classList.add("invertColors");
          easyButton.classList.remove("invertColors");
     });
}

//reset changes back to normal
function resetValues(){
     document.querySelector(".jumbotron").style.backgroundColor = "#ABABAB";
     document.querySelector(".messageDisplay").textContent = "";
     newColorButton.textContent = "New Colors";
}

//return a random color in rgb(r, g, b) format
function getRandomColor(){
     var red = getRandomInt(255);
     var green = getRandomInt(255);
     var blue = getRandomInt(255);
     return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//select one rgb square to be the correct answer and change the text accordingly
function selectCorrectColor(){
     if(hardMode){
          correctRGB = squares[getRandomInt(6)].style.backgroundColor;
          document.querySelector("#guessThisRGB").textContent = correctRGB;
     }
     else if (easyMode) {
          correctRGB = squares[getRandomInt(3)].style.backgroundColor;
          document.querySelector("#guessThisRGB").textContent = correctRGB;
     }
}

//check user input
function checkPickedColor(){
     for (var i = 0; i < squares.length; i++) {
          //check for user input
          squares[i].addEventListener("click", function(){
               if(this.style.backgroundColor === correctRGB){
                    document.querySelector(".jumbotron").style.backgroundColor = correctRGB;
                    document.querySelector(".messageDisplay").textContent = "Correct!";
                    newColorButton.textContent = "Play Again?";
                    for (var i = 0; i < squares.length; i++) {
                         squares[i].style.backgroundColor = correctRGB;
                    }
               }
               else{
                    this.style.backgroundColor = "#232323";
                    document.querySelector(".messageDisplay").textContent = "Try Again!";
               }
          });
     }
}

//start
colorSquaresRandomly();
checkPickedColor()
getNewColors();
setDifficulty();
