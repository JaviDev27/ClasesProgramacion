public class UberPool extends Car{
    String brang;
    String model;

    public UberPool(String license, Account driver, String brand, String model){
        super(license,driver);
        this.brang = brand;
        this.model = model;
    }
}
