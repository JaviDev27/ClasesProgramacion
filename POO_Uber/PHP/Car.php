<?php

class Car{
    public $id;
    public $license;
    public $driver;
    public $passenger;

    public function __construct($driver,$license){
        $this->$driver;
        $this->$license;
    }

    public function printData(){
        echo  "Licencia : ".$this->$license." el conductor es: ".$this->$driver;
    }
}