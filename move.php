<?php
function telescopeSend($in)
{
	
	$address = '128.61.149.41';
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

if($_GET['q'] == "up" )
{
	$toSend = "/* Java Script */ TheSkyXAction.execute(\"MOVE_UP\");";
	

	echo "Moving Telescope Up<br>Sending:" . $toSend ;
	telescopeSend($toSend);

	echo "<br> telescope moved up";
}
else if($_GET['q'] == "down" )
{
	$toSend = "/* Java Script */ TheSkyXAction.execute(\"MOVE_DOWN\");";

	echo "Moving Telescope Down<br>Sending:" . $toSend ;
	telescopeSend($toSend);
	
}
else if($_GET['q'] == "left" )
{
	$toSend = "/* Java Script */ TheSkyXAction.execute(\"MOVE_LEFT\");";

	echo "Moving Telescope Left<br>Sending:" . $toSend ;
	telescopeSend($toSend);
	
}
else if($_GET['q'] == "right" )
{
	$toSend = "/* Java Script */ TheSkyXAction.execute(\"MOVE_RIGHT\");";

	echo "Moving Telescope Right<br>Sending:" . $toSend ;
	telescopeSend($toSend);
	
}
?>

