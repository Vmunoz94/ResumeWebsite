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
