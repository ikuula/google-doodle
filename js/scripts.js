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

//change class on body element
$('body').addClass('bg' + randNum);

//var max = 6;
//var randNum = Math.floor(Math.random() * max);
//console.log(randNum);
//
////change class on body element
//$('img').addClass('bg' + randNum);