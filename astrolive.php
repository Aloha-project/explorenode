<?php

require_once 'HTTP/Request2.php';

class AstroLive
{
	private $address;

	function __construct($address) {
		this.$address = $address;
	}

	private function makeRequest($function, $argName = null, $arg = null) {
		$request = new HTTP_Request2('http://' . $address . ':6778/' . $function, HTTP_Request2::METHOD_POST);

		if ($argName !== null && $arg !== null) {
			$request->addPostParameter($argName, $arg);
		}

		try {
		    $response = $request->send();

		    if (200 == $response->getStatus()) {
		        $result = json_parse($response->getBody());

		        return $result;
		    } else {
		        throw new Exception("Problem communicating with AstroLive");
		    }
		} catch (HTTP_Request2_Exception $e) {
		    throw new Exception("Request to AstroLive failed: " . $e->getMessage());
		}
	}

	public function connectCamera() {
		return makeRequest("ConnectVideoCamera")
	}

	public function setIntegration($seconds) {
		return makeRequest("SetIntegration", "seconds", $seconds);
	}

	public function setGain($value) {
		return makeRequest("SetGain", "value", $value);
	}
}
?>