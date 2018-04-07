$(document).ready(function(){
	$(window).scroll(function () {
    	if ($(this).scrollTop() > 80) {
    		$("#navbar-ul").css({"backgroundColor": "#800020", "color": "#fbf4ea"});
    		$("#menu-icon").css({"backgroundColor": "#800020", "color": "#fbf4ea"});
    		$("#menu").css({"backgroundColor": "#800020", "color": "#fbf4ea"});
    	};
    	if ($(this).scrollTop() < 50) {
    		$("#navbar-ul").css({"backgroundColor": "#fbf4ea", "color": "#800020"});
    		$("#menu-icon").css({"backgroundColor": "#fbf4ea", "color": "#800020"});
    		$("#menu").css({"backgroundColor": "#fbf4ea", "color": "#800020"});
    	}
    });

	//check for initial width
	if($(window).width()>600){
		$("#navbar-ul").css({"display": "block"});
		$("#menu-icon").css({"display": "none"});
	}
	else if($(window).width()<600){
		$("#navbar-ul").css({"display": "none"});
		$("#menu-icon").css({"display": "block"});
	}

	//check for width changes
	var width = $(window).width();
	$(window).on('resize', function(){
		if($(this).width() > 600){
			$("#navbar-ul").css({"display": "block"});
			$("#menu-icon").css({"display": "none"});
		}
		if($(this).width() < 600){
			$("#navbar-ul").css({"display": "none"});
			$("#menu-icon").css({"display": "block"});
		}
	});
});

function showMenu() {
	$("#menu").toggle();
}
// // Set the date we're counting down to
// var countDownDate = new Date("July 21, 2018 09:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "LIVE NOW";
//   }
// }, 1000);