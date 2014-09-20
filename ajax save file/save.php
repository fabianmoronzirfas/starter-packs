<?php
// save the value to file and send an email with it
$val = $_POST['value'];
setlocale(LC_TIME, "fi_FI");
date_default_timezone_set("Europe/Berlin");
$date = strftime("%Y-%m-%d-%A");
$timesaved = strftime("%H:%M:%S");
$thetime = $_POST['current_time'];
$file = "saved/values.txt";
$cont = $thetime . ', ' . $val . '' . "\n";

$f = fopen($file, 'a+');
fwrite($f, $cont);
fclose($f);

mail("fabiantheblind@gmail.com", "webhook picotor executed",$cont;

?>