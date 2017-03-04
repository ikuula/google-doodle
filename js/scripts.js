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



//RANDOM BG GENERATOR
//get random number 
var max = 6;
var randNum = Math.floor(Math.random() * max);
console.log(randNum);

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


$("#stage").click(function() {
  $('#g').toggleClass('g');
});
$("#stage").click(function() {
  $('#hand').toggleClass('hand');
});
$("#stage").click(function() {
  $('#o').toggleClass('o');
});
$("#stage").click(function() {
  $('#hand2').toggleClass('hand2');
});
$("#stage").click(function() {
  $('#o2').toggleClass('o2');
});
$("#stage").click(function() {
  $('#hand3').toggleClass('hand3');
});
$("#stage").click(function() {
  $('#g2').toggleClass('g2');
});
$("#stage").click(function() {
  $('#hand4').toggleClass('hand4');
});
$("#stage").click(function() {
  $('#l').toggleClass('l');
});
$("#stage").click(function() {
  $('#hand5').toggleClass('hand5');
});
$("#stage").click(function() {
  $('#e').toggleClass('e');
});
$("#stage").click(function() {
  $('#hand6').toggleClass('hand6');
});

