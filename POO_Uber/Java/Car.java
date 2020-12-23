public class Car {
    private int id;
    private String license;
    private Account driver;
    protected int passengers;

    public Car(String license, Account driver ) {
        this.license = license;
        this.driver = driver;
        //passengers = 3;
        //System.out.println(passengers);

    }


    void printDataCar(){
        if(passengers != 0){
            System.out.println("licencia: " + license + 
            " Conductor: " + driver.name +
            " Pasajeros: " + passengers);
        }
    }

    public int getPassenger(){
        return passengers;
    }

    public void setPassenger(int passenger){
        if(passenger == 4){
            this.passengers = passenger;
        }else{
            System.out.println("Necesitas assignar 4 pasajeros");
        }
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }

}
