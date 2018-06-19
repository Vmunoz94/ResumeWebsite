//change the background color of #name
//use to get a random integer
//e.i. getRandomInt(255) returns an integer in between 0-249
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomColor(){
     var red = getRandomInt(255);
     var green = getRandomInt(255);
     var blue = getRandomInt(255);
     return "rgb(" + red + ", " + green + ", " + blue + ")";
}
$("#name").on("mouseenter", function(){
     $(this).css("backgroundColor", getRandomColor());
});


//fix navbar to top
$(document).ready(function() {
  // Custom
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
      $(".navbar-dark .navbar-brand").css("color", "white");
      $(".navbar-dark .navbar-nav .nav-link").css("color","white");
      $(".navbar-toggler").css("color","white");
      // $(".navbar-toggler").css("backgroundColor","white");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
      $(".navbar-dark .navbar-brand").css("color", "black");
      $(".navbar-dark .navbar-nav .nav-link").css("color","black");
      $(".navbar-toggler").css("color","black");
      // $(".navbar-toggler").css("backgroundColor","black");
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});


//animate click on scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
     }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});

// make button active and change src files of images
$(".projectLinks").on("mouseover", function(){
     $(".projectLinks").removeClass("active");
     if($(this).text() === "Color Game"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/colorGame.png");
               $("img").fadeIn();
          });
     }
     else if($(this).text() === "Todo List"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/todoList.png");
               $("img").fadeIn();
          });
     }
     else if($(this).text() === "Patatap"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/patatap.png");
               $("img").fadeIn();
          });
     }
     else if($(this).text() === "Tank Wars"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/tankWar.png");
               $("img").fadeIn();
          });
     }
     else if($(this).text() === "Galactic Mail"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/galacticMail.png");
               $("img").fadeIn();
          });
     }
     else if($(this).text() === "Calculator"){
          $(this).addClass("active");
          $("img").fadeOut(function(){
               $("img").attr("src", "resumeWebsite/images/calculator.png");
               $("img").fadeIn();
          });
     }
})
