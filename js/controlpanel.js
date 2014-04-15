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
		scriptUrl = "https://aloha.gatech.edu/explorenode/move.php?q=up";
		moveTelescope(scriptUrl);
			});

	$('#down.button').mousedown(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/downclick.png)");
			});
	$('#down.button').mouseup(function (){
		$('#down.button').css("background-image", "url(explorenode/css/images3/down.png)");
		scriptUrl = "https://aloha.gatech.edu/explorenode/move.php?q=down";
		moveTelescope(scriptUrl);
			});

	$('#left').mousedown(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/leftclick.png)");	
			});
	$('#left').mouseup(function (){
		$('#left').css("background-image", "url(explorenode/css/images3/left.png)");	
		scriptUrl = "https://aloha.gatech.edu/explorenode/move.php?q=left";
		moveTelescope(scriptUrl);
			});

	$('#right').mousedown(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/rightclick.png)");
			});
	$('#right').mouseup(function (){
		$('#right').css("background-image", "url(explorenode/css/images3/right.png)");
		scriptUrl = "https://aloha.gatech.edu/explorenode/move.php?q=right";
		moveTelescope(scriptUrl);
			});




})


function moveTelescope(scriptUrl) {
	console.log("moving telescope ...");
	console.log(scriptUrl);
	$.ajax({
     		url: scriptUrl,
     		type: 'post',
     		data: ({"param" : "direction"}),
     		dataType: 'html',
     		async: false,
     		success: function(data) {
				console.log("success");
				console.log(scriptUrl);
     				}	
   	});
}


