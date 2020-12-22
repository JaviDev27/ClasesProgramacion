class Main {
    public static void main(String[] args){
        System.out.println("hola mundo");
    
        
        Car car = new Car("AMD321", new Account("Andres", "1723422"));
        car.passengers = 4;
        System.out.println("Car1 license: " + car.driver.name);

        Car car2 = new Car("AMs321", new Account("Juan", "23232"));
        car2.passengers = 4;

        System.out.println("Car2 license: " + car2.driver.name);

        car.printDataCar();

    }
}
