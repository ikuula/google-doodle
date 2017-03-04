// YOUR SCRIPTS GO HERE

////Store 3 images
//var img0 = '../img/200.jpg';
//var img1 = '../img/300.jpg';
//var img1 = '../img/400.jpg';
//
////Get ramdom number
////random number generator
//var max = 3;
//var randNum = Math.floor(Math.random() * max);
//console.log(randNum);
//
//// Display randomized img
//$('#random').attr('src', eval('img' + randNum) );



//RANDOM BG Color GENERATOR
//get random number 
var max = 6;
var randNum = Math.floor(Math.random() * max);
//change class on #stage div
$('#stage').addClass('bg' + randNum);
$('button').addClass('bg' + randNum);

//var max = 6;
//var randNum = Math.floor(Math.random() * max);
//console.log(randNum);
//
////change class on body element
//$('img').addClass('bg' + randNum);

//$('#stage').click(function() { 
//  $('#cloud').addClass('cloud');
//});


 //DRAW SVG
var $svg = $('svg').drawsvg({
      duration: 6500,
      easing: 'linear'
    });

//$svg.drawsvg('animate');

$("#stage").click(function() {
  $($svg).drawsvg('animate');
});

// CLICK TO START ANIMATIONS
$("#stage").click(function() {
  $('#g').addClass('g');
});
$("#stage").click(function() {
  $('#hand').addClass('hand');
});
$("#stage").click(function() {
  $('#o').addClass('o');
});
$("#stage").click(function() {
  $('#hand2').addClass('hand2');
});
$("#stage").click(function() {
  $('#o2').addClass('o2');
});
$("#stage").click(function() {
  $('#hand3').addClass('hand3');
});
$("#stage").click(function() {
  $('#g2').addClass('g2');
});
$("#stage").click(function() {
  $('#hand4').addClass('hand4');
});
$("#stage").click(function() {
  $('#l').addClass('l');
});
$("#stage").click(function() {
  $('#hand5').addClass('hand5');
});
$("#stage").click(function(){
  $('#e').addClass('e');
});
$("#stage").click(function() {
  $('#hand6').addClass('hand6');
});

