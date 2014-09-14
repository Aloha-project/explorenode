var $ = jQuery.noConflict();

jQuery(document).ready(function() {
	$('#up.button').css("background-image", "url(explorenode/css/images3/move_up.png)");
	$('#up.button').css("background-size", "contain");
	$('#down.button').css("background-image", "url(explorenode/css/images3/move_down.png)");
	$('#down.button').css("background-size", "contain");
	$('#left').css("background-image", "url(explorenode/css/images3/move_left.png)");
	$('#left').css("background-size", "contain");
	$('#right').css("background-image", "url(explorenode/css/images3/move_right.png)");
	$('#right').css("background-size", "contain");


	$('#up.button').mousedown(function (){
		$('#up.button').css("background-image", "url(explorenode/css/images3/move_up_click.png)");
	});
	$('#up.button').mouseup(function (){
		$('#up.button').css("background-image", "url(explorenode/css/images3/move_up.png)");
		direction = "North";
		moveTelescope(direction);
	});

	$('#down.button').mousedown(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/move_down_click.png)");
	});
	$('#down.button').mouseup(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/move_down.png)");
		direction = "South";
		moveTelescope(direction);
	});

	$('#left').mousedown(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/move_left_click.png)");	
	});
	$('#left').mouseup(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/move_left.png)");	
		direction = "West";
		moveTelescope(direction);
	});

	$('#right').mousedown(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/move_right_click.png)");
	});
	$('#right').mouseup(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/move_right.png)");
		direction = "East";
		moveTelescope(direction);
	});
})

jQuery(document).ready(function() {
	$('#in.button').css("background-image", "url(explorenode/css/images3/focus_up.png)");
	$('#in.button').css("background-size", "contain");
	$('#out.button').css("background-image", "url(explorenode/css/images3/focus_down.png)");
	$('#out.button').css("background-size", "contain");

	$('#in.button').mousedown(function (){
		$('#in.button').css("background-image", "url(explorenode/css/images3/focus_up_click.png)");
	});
	$('#in.button').mouseup(function (){
		$('#in.button').css("background-image", "url(explorenode/css/images3/focus_up.png)");
		direction = "in";
		moveTelescope(direction);
	});

	$('#out.button').mousedown(function (){
		$('#out.button').css("background-image", "url(explorenode/css/images3/focus_down_click.png)");
	});
	$('#out.button').mouseup(function (){
		$('#out.button').css("background-image", "url(explorenode/css/images3/focus_down.png)");
		direction = "out";
		moveTelescope(direction);
	});
})

jQuery(document).ready(function() {
	$('#bright0.button').css("background-image", "url(explorenode/css/images3/bright_down.png)");
	$('#bright0.button').css("background-size", "contain");
	$('#bright1.button').css("background-image", "url(explorenode/css/images3/bright_up.png)");
	$('#bright1.button').css("background-size", "contain");

	$('#bright1.button').mousedown(function (){
		$('#bright1.button').css("background-image", "url(explorenode/css/images3/bright_up_click.png)");
	});
	$('#bright1.button').mouseup(function () {
		$('#bright1.button').css("background-image", "url(explorenode/css/images3/bright_up.png)");
		changeBrightness(1);
	});

	$('#bright0.button').mousedown(function (){
		$('#bright0.button').css("background-image", "url(explorenode/css/images3/bright_down_click.png)");
	});
	$('#bright0.button').mouseup(function () {
		$('#bright0.button').css("background-image", "url(explorenode/css/images3/bright_down.png)");
		changeBrightness(-1);
	});
})

function moveTelescope(direction) {
	console.log("moving telescope ...");
	console.log(direction);
	$.ajax({
		url: "https://aloha.gatech.edu/explorenode/move.php",
		type: 'post',
		data: ({"param" : "direction", "q": direction}),
		dataType: 'html',
		async: false,
		success: function(data) {
			console.log("success");
			console.log(direction);
		}	
	});
}

brightnessSettings = {
	0:  {integration:  0, gain: 0},
	1:  {integration:  1, gain: 0},
	2:  {integration:  2, gain: 0},
	3:  {integration:  3, gain: 0},
	4:  {integration:  4, gain: 0},
	5:  {integration:  5, gain: 0},
	6:  {integration:  6, gain: 0},
	7:  {integration:  7, gain: 0},
	8:  {integration:  8, gain: 0},
	9:  {integration:  9, gain: 0},
	10: {integration: 10, gain: 0},
	11: {integration: 11, gain: 0},
	12: {integration: 12, gain: 0}
}

currentBrightness = 6;

function changeBrightness(value) {
	currentBrightness = currentBrightness + value;
	console.log("setting brightness ...");
	console.log(currentBrightness);

	$.ajax({
		url: "https://aloha.gatech.edu/explorenode/video.php",
		type: 'post',
		data: ({"gain": brightnessSettings[currentBrightness].gain}),
		dataType: 'html',
		async: false,
		success: function(data) {
			console.log("gain success");
			console.log(brightnessSettings[currentBrightness].gain);
		}	
	});

	$.ajax({
		url: "https://aloha.gatech.edu/explorenode/video.php",
		type: 'post',
		data: ({"integration": brightnessSettings[currentBrightness].integration}),
		dataType: 'html',
		async: false,
		success: function(data) {
			console.log("integration success");
			console.log(brightnessSettings[currentBrightness].integration);
		}	
	});
}
