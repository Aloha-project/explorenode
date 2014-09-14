<?php
function telescopeSend($in)
{
	
	$address = '132.160.97.41';
	$port = 3040;
	
	echo "<br>Invoking telescope move through port: ".$port;

	try {

	//throw new Exception('Division by zero.');

	if (($sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)) === false) {

		throw new Exception('Socket not created');
    		echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
	} 

	
	
	$result = socket_connect($sock, $address, $port);
	
	echo "<br>Socket connecting.. ";
	if ($result === false) {
    		echo " result retuened false ... message : " . socket_strerror(socket_last_error()) . "\n";
	}
	echo "<br>Socket writing.. ";
	socket_write($sock, $in, strlen($in));
/*	$out="";
	while ($out = socket_read($sock, 2048)) {
    		echo $out;
	}*/
	socket_close($sock);
	echo "<br>Socket closed.. ";

	}
	catch (Exception $e)
	{
		echo "<br> caught exception";
	}
}

if ($_POST['q'] == "North" || $_POST['q'] == "South" || $_POST['q'] == "West" || $_POST['q'] == "East")
{

	$toSend = "/* Java Script */

	var dJog = \"0.5\";
	var dDirection = \"$_POST['q']\";
	var Out;


	sky6RASCOMTele.Connect();



	if (sky6RASCOMTele.IsConnected==0)//Connect failed for some reason
	{
	        Out = \"Not connected\"
	}
	else
	{
	        sky6RASCOMTele.Jog(dJog, dDirection);
	        Out  = \"OK\";
	}";

	//$toSend = "/* Java Script */ TheSkyXAction.execute(\"MOVE_" . strtoupper($_POST['q']) . "\");";

	echo "Moving Telescope " . $_POST['q'] . "<br>Sending:" . $toSend ;
	telescopeSend($toSend);

	echo "<br> telescope moved " . $_POST['q'];
} else if ($_POST['q'] == "in" || $_POST['q'] == "out") {
	$toSend = "/* Java Script */ ccdsoftCamera.focMove" . ucfirst($_POST['q']) . "(100);";

	echo "Moving Focuser " . $_POST['q'] . "<br>Sending:" . $toSend ;
	telescopeSend($toSend);

	echo "<br> focuser moved " . $_POST['q'];
}
?>

