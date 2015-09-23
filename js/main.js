/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
if ($('#site-wrapper').hasClass('show-nav')) {
  // Do things on Nav Close
  $('#site-wrapper').removeClass('show-nav');
} else {
  // Do things on Nav Open
  $('#site-wrapper').addClass('show-nav');
}

//$('#site-wrapper').toggleClass('show-nav');
}

document.querySelector( "#big-sexy" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
