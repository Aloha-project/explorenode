var $ = jQuery.noConflict();

jQuery(document).ready(function() {
	$('#up.button').css("background-image", "url(explorenode/css/images3/up.png)");
	$('#up.button').css("background-size", "contain");
	$('#down.button').css("background-image", "url(explorenode/css/images3/down.png)");
	$('#down.button').css("background-size", "contain");
	$('#left').css("background-image", "url(explorenode/css/images3/left.png)");
	$('#left').css("background-size", "contain");
	$('#right').css("background-image", "url(explorenode/css/images3/right.png)");
	$('#right').css("background-size", "contain");


	$('#up.button').mousedown(function (){
		$('#up.button').css("background-image", "url(explorenode/css/images3/upclick.png)");
	});
	$('#up.button').mouseup(function (){
		$('#up.button').css("background-image", "url(explorenode/css/images3/up.png)");
		direction = "up";
		moveTelescope(direction);
	});

	$('#down.button').mousedown(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/downclick.png)");
	});
	$('#down.button').mouseup(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/down.png)");
		direction = "down";
		moveTelescope(direction);
	});

	$('#left').mousedown(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/leftclick.png)");	
	});
	$('#left').mouseup(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/left.png)");	
		direction = "left";
		moveTelescope(direction);
	});

	$('#right').mousedown(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/rightclick.png)");
	});
	$('#right').mouseup(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/right.png)");
		direction = "right";
		moveTelescope(direction);
	});
})

jQuery(document).ready(function() {
	$('#in.button').css("background-image", "url(explorenode/css/images3/up.png)");
	$('#in.button').css("background-size", "contain");
	$('#out.button').css("background-image", "url(explorenode/css/images3/down.png)");
	$('#out.button').css("background-size", "contain");

	$('#in.button').mousedown(function (){
		$('#in.button').css("background-image", "url(explorenode/css/images3/upclick.png)");
	});
	$('#in.button').mouseup(function (){
		$('#in.button').css("background-image", "url(explorenode/css/images3/up.png)");
		direction = "in";
		moveTelescope(direction);
	});

	$('#out.button').mousedown(function (){
		$('#out.button').css("background-image", "url(explorenode/css/images3/downclick.png)");
	});
	$('#out.button').mouseup(function (){
		$('#out.button').css("background-image", "url(explorenode/css/images3/down.png)");
		direction = "out";
		moveTelescope(direction);
	});
})

jQuery(document).ready(function() {
	$('#bright0.button').css("background-image", "url(explorenode/css/images3/bright0.png)");
	$('#bright0.button').css("background-size", "contain");
	$('#bright1.button').css("background-image", "url(explorenode/css/images3/bright1.png)");
	$('#bright1.button').css("background-size", "contain");
	$('#bright2.button').css("background-image", "url(explorenode/css/images3/bright2.png)");
	$('#bright2.button').css("background-size", "contain");
	$('#bright3.button').css("background-image", "url(explorenode/css/images3/bright3.png)");
	$('#bright3.button').css("background-size", "contain");

	$('#bright0.button').click(function () {
		changeBrightness(0);
	});

	$('#bright1.button').click(function () {
		changeBrightness(1);
	});

	$('#bright2.button').click(function () {
		changeBrightness(2);
	});

	$('#bright3.button').click(function () {
		changeBrightness(3);
	});

	$('#bright4.button').click(function () {
		changeBrightness(4);
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
	0: {integration:  0, gain: 0},
	1: {integration:  4, gain: 0},
	2: {integration:  7, gain: 0},
	3: {integration: 10, gain: 0},
	4: {integration: 14, gain: 0},
}

function changeBrightness(value) {
	console.log("setting brightness ...");
	console.log(value);

	$.ajax({
		url: "https://aloha.gatech.edu/explorenode/video.php",
		type: 'post',
		data: ({"gain": brightnessSettings[value].gain}),
		dataType: 'html',
		async: false,
		success: function(data) {
			console.log("gain success");
			console.log(brightnessSettings[value].gain);
		}	
	});

	$.ajax({
		url: "https://aloha.gatech.edu/explorenode/video.php",
		type: 'post',
		data: ({"gain": brightnessSettings[value].integration}),
		dataType: 'html',
		async: false,
		success: function(data) {
			console.log("integration success");
			console.log(brightnessSettings[value].integration);
		}	
	});
}
