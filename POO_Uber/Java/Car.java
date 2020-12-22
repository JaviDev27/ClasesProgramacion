public class Car {
    int id;
    String license;
    Account driver;
    int passengers;

    public Car(String license, Account driver ) {
        this.license = license;
        this.driver = driver;

    }


    void printDataCar(){
        System.out.println("licencia: " + license + "/nConductor: " + driver.name );
    }



}
