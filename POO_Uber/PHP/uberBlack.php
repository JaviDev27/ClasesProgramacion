<?php

require_once('car.php');

class UberBlack extends Car{
    public $typeCarAccepted;
    public $seatsMaterials;

    public function __construct($name,$license,$typeCarAccepted,$seatsMaterials){

        parent::__construct($name,$license);
        $this->$typeCarAccepted = $typeCarAccepted;
        $this->$typeCarAccepted = $typeCarAccepted;
    }
}
?>