class Rectangulo:

    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base*self.altura


class Cuadrado(Rectangulo):
    def __init__(self, base, altura):
        super().__init__(base, altura)


if __name__ == '__main__':
    rectangulo = Rectangulo(12, 60)
    print(rectangulo.area())

    cuadrado = Cuadrado(56, 56)
    print(cuadrado.area())
