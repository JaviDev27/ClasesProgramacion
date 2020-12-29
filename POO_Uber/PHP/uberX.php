<?php

require_once('car.php');

class UberX extends Car{
    public $brand;
    public $model;

    public function __construct($name,$license,$brand,$model){

        parent::__construct($name,$license);
        $this->$brand = $brand;
        $this->$model = $model;
    }
}
?>