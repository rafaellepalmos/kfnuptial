$(document).ready(function(){
	// for side navbar
	$('.sidenav').sidenav();
	$('.parallax').parallax();
    $('.tap-target').tapTarget();
    $('.tap-target').tapTarget('open');

	console.log($(window).width());   // returns width of browser viewport
	console.log($(document).width());

});

// Set the date we're counting down to
var countDownDate = new Date("July 21, 2018 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, update the text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "<b>#kentonandfaye LIVE NOW</b>";
  }
}, 1000);