from car import Car
from account import Account

if __name__=="__main__":
    print("hola")
    car = Car("1234", Account("Andres","12345"))
    car.passengers = 4

    print(vars(car))
    print(vars(car.driver))


    
