function highlight(){
  $('h1').text('Hello');
  $('.jumbotron').addClass('highlighted');

}
function unhighlight(){
$('h1').text('Hello, World!');
$('.jumbotron').removeClass('highlighted');
}
