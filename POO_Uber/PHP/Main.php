<?php
require_once("car.php");
require_once("account.php");
?>
<!DOCTYPE html>
<htmllang="en">
<head>
    <metacharset="UTF-8">
    <metaname="viewport"content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Clase POO con PHP</h1>
    <?php
    $car = new Car(new Account("Andres", "17243"),123543);
    $car->PrintDataCar();
    echo"<h1>holas</h1>";
    ?>
</body>
</html>```