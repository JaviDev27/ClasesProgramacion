from car import Car

class UberVan(Car):
    typeCarAccept = list
    seatsMaterials = list

    def __init__(self, license, drive, typeCarAccept, seatsMaterials):
        super().__init__(license, drive)
        self.typeCarAccept = typeCarAccept
        self.seatsMaterials = seatsMaterials