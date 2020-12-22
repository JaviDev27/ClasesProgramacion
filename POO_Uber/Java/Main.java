class Main {
    public static void main(String[] args){
        System.out.println("hola mundo");
        Car car = new Car();
        car.driver = "Andres Caizo";
        car.license = "AMD321";
        car.passengers = 4;
        System.out.println("Car1 license: " + car.driver);

        Car car2 = new Car();
        car2.driver = "Luis Caizo";
        car2.license = "LA321";
        car2.passengers = 4;

        System.out.println("Car2 license: " + car2.driver);

        car.printDataCar();

    }
}
