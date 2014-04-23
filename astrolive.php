<?php

require_once 'HTTP/Request2.php';

class AstroLive
{
	private $address = null;

	function __construct($address = "localhost") {
		$this->address = $address;
	}

	private function makeRequest($function, $arg = null) {
		$request = new HTTP_Request2('http://' . $this->address . ':6778/' . $function, HTTP_Request2::METHOD_POST);

		if ($arg !== null) {
			$request->setHeader('Content-type: application/json');
			$request->setBody(json_encode($arg));
		}

		try {
		    $response = $request->send();

		    if (200 == $response->getStatus()) {
		        $result = json_decode($response->getBody());

		        return $result;
		    } else {
		        throw new Exception("Problem communicating with AstroLive");
		    }
		} catch (HTTP_Request2_Exception $e) {
		    throw new Exception("Request to AstroLive failed: " . $e->getMessage());
		}
	}

	public function connectCamera() {
		return $this->makeRequest("ConnectVideoCamera");
	}

	public function setIntegration($value) {
		return $this->makeRequest("SetIntegration", $value);
	}

	public function setGain($value) {
		return $this->makeRequest("SetGain", $value);
	}
}

?>