<?php
require_once('car.php');
require_once('uberX.php');
require_once('account.php');


$uberx = new UberX("QW212", new Account("Andres","111"),"Chevrolet","Spark");
$uberx->printDataCar();
?>