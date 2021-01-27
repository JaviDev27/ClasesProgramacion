public class Uberx extends Car{
    String brang;
    String model;

    public Uberx(String license, Account driver, String brand, String model){
        super(license,driver);
        this.brang = brand;
        this.model = model;
    }

    @Override
    void printDataCar() {
        // TODO Auto-generated method stub
        super.printDataCar();
        System.out.println("modelo: " + model + 
        " marca: " + brang );
    }
}
