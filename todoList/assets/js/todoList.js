//start
init();

//initialize the background color of the todo List
//alternate between white and grey
function init(){
     deleteButton();
     checkIfComplete();
     enterButton();
     addButton();
}

//check if todo has been completed or not
//add click listeners when page loads and to any future li
function checkIfComplete(){
     $("ul").on("click", "li", function(){
          $(this).toggleClass("complete");
     });
}

//check if todo has been deleted by checking if the span has been clicked
//if so, fade out the spans parent(e.i. the li), and set the display to "none"
//add click listeners when page loads and to any future span
function deleteButton(){
     $("ul").on("click", "span", function(){

          $(this).parent().fadeOut(function(){
               $(this).remove();
          });
          event.stopPropagation();
     });
}

//add todos
function enterButton(){
     $("input[type='text']").on("keypress", function(event){
          //check if enter was pressed
          if(event.keyCode === 13 && $(this).val() !== ""){
               $("ul").append("<li>" + $(this).val() + " <span><i class='fas fa-trash-alt'></i></span></li>");
               $(this).val("");
          }
     });
}

//show/hide the input text box
function addButton(){
     $("h1 i").on("click", function(){
          $("input[type='text']").fadeToggle();
     });
}
