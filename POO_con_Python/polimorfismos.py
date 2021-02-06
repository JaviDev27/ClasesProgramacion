class Persona:

    def __init__(self, nombre):
        self.nombre = nombre

    def avanza(self):
        print('Ando caminando')


class Ciclista(Persona):

    def __init__(self, nombre):
        super().__init__(nombre)

    def avanza(self):
        print('Ando moviendome en la bicicleta')


class Rectangulo:
    def __init__(self):
        pass

    def dibujar(self, base, altura):
        print(f'El rectángulo se dibuja con base {base} y altura {altura}')

    def dibujar(self, punto1, punto2, punto3):
        print(
            f'El rectángulo se dibuja con el punto1 ({punto1[0]},{punto2[1]}) y punto2 ({punto1[0]},{punto2[1]})')


class Pelicula:
    # Constructor de clase
    def __init__(self, titulo, duracion, lanzamiento):
        self.titulo = titulo
        self.duracion = duracion
        self.lanzamiento = lanzamiento
        print("Se ha creado la película", self.titulo)

    # Redefinimos el método string
    def __str__(self):
        return f'{self.titulo} lanzada en {self.lanzamiento} con una duración de {self.duracion} minutos'

    # Redefinimos el método length
    def __len__(self):
        return self.duracion


p = Pelicula("El Padrino", 175, 1972)
len(p)


def main():
    ciclista1 = Ciclista('David')
    ciclista1.avanza()
    persona1 = Persona('David')
    persona1.avanza()
    rectangulo1 = Rectangulo()
    #rectangulo1.dibujar(punto1=[1, 2], punto2=[4, 5])
    #rectangulo1.dibujar(base=500, altura=300)

    p = Pelicula("El Padrino", 175, 1972)
    print(str(p))
    print(len(p))
    print(p)


if __name__ == '__main__':
    main()
