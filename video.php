<?php
// Mallincam Xtreme with AstroLive
$astrolive = new AstroLive("128.61.149.41");

// Connect AstroLive to the Mallincam if it's not already connected
// AstroLive should be preconfigured for the correct video camera
// settings and already running
$astrolive->connectCamera();

// For the Mallincam Xtreme the Gain setting is AGC
// API values for gain correspond to the following Mallincam Xtreme AGC settings:
// 0 = AGC Off
// 1 = AGC 0
// 2 = AGC 1
// 3 = AGC 2
// 4 = AGC 3
// 5 = AGC 4
// 6 = AGC 5
// 7 = AGC 6
// 8 = AGC 7
// 9 = AGC 8
//$astrolive->setGain(0);

// For the Mallincam Xtreme in normal (non-Hyper) mode, integration/exposure time
// is controlled by a combination of shutter speed and SensUp values.  API values
// for integration correspond to the following camera settings:
//  0 = 1/12000
//  1 = 1/8000
//  3 = 1/6000
//  4 = 1/4000
//  5 = 1/3000
//  6 = 1/2000
//  7 = 1/1500
//  8 = 1/1000
//  9 = 1/750
// 10 = 1/500
// 11 = 1/350
// 12 = 1/250
// 13 = 1/180
// 14 = 1/120
// 15 = x1
// 16 = x2
// 17 = x4
// 18 = x6
// 19 = x8
// 20 = x12
// 21 = x16
// 22 = x24
// 23 = x32
// 24 = x48
// 25 = x64
// 26 = x96
// 27 = x128
//$astrolive->setIntegration(8);

if ($_POST['q'] == "gain")
{
	$astrolive->setGain($_POST['value']);
} else if ($_POST['q'] == "integration")
{
	$astrolive->setIntegration($_POST['value']);
}
?>