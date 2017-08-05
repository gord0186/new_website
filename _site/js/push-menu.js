// Needs latest version of jQuery to run

console.log('Message!');

$(function(){
  $('body') .removeClass("noscript")

  $(".toggle-btn, .close-btn").click(function(){
    toggleNav();
  });

});

function toggleNav(){
  if ($(".site-wrapper").attr("data-state") =="slide-closed"){
    //displays nav when closed
    $(".site-wrapper").attr("data-state", "slide-open")
  } else {
    $(".site-wrapper").attr("data-state", "slide-closed")
  }
}
/*
$(function() {
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function() {
    toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // Display Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
  } else {
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}
*/
