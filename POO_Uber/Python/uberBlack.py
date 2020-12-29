from car import Car

class UberX(Car):
    typeCarAccept = list
    seatsMaterials = list

    def __init__(self, license, drive, typeCarAccept, seatsMaterials):
        super().__init__(license, drive)
        self.typeCarAccept = typeCarAccept
        self.seatsMaterials = seatsMaterials


