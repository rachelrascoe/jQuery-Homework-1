function highlight(){
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlighted');
}

function unhighlight(){
$('h1').text('Hello, World!');
$('.jumbotron').removeClass('highlighted');
}

function hide(){
$('.jumbotron').fadeOut();
}

function show(){
$('.jumbotron').slideDown();
}

$(document).ready(function() {
  $('.jumbotron').on('mouseenter', highlight);
});

$(document).ready(function() {
  $('.jumbotron').on('mouseleave', unhighlight);
});

$(document).ready(function() {
$('.hide-jumbotron').on('click', hide);
});

$(document).ready(function() {
$('.show-jumbotron').on('click', show);
});
