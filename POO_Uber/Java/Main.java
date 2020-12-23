class Main {
    public static void main(String[] args){
        System.out.println("hola mundo");
    
        
        Uberx uberx = new Uberx("AMD321", new Account("Andres", "1723422"),"chevrolet","spark");
        //uberx.passengers = 4;
        uberx.setPassenger(1);
        uberx.printDataCar();

        /*Car car2 = new Car("AMs321", new Account("Juan", "23232"));
        car2.passengers = 4;

        System.out.println("Car2 license: " + car2.driver.name);

        car2.printDataCar();*/

    }
}
