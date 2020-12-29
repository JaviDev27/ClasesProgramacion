import java.util.ArrayList;
import java.util.Map;

public class UberVan extends Car {
    
    Map<String, Map<String,Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterials;

    public UberVan(String license, Account driver, Map<String, 
    Map<String,Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterials){

        super(license,driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterials = seatsMaterials;
    }

    public UberVan(String license, Account driver){

        super(license,driver);
    }

    @Override
    public void setPassenger(int passenger) {
        if(passenger == 6){
            super.passengers= passenger;
        }else{
            System.out.println("Necesitas assignar 6 pasajeros");
        }                
    }


}
