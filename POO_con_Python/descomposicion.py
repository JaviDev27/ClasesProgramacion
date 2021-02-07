"""
En este ejemplo se va a creae una clase llamada Automovil
    Donde:
        Se busca dividir el problema en partes mas pequeñas
    
    Partes:
        Motor: parte fundamental del automovil

Esto permite tener un mejor entendimiento de como funciona la 
Programación Orientada a Objetos, es decir unicamente on crear 
el objeto Automovil vas a tener un objeto con toda la funcionalidad
pero dividido en varia parte. en donde el codigo es mas entendible
y la mantenibilidad se lo puede hacer por partes.


"""


class Automovil:

    def __init__(self, modelo, marca, color):
        self.modelo = modelo
        self.marca = marca
        self.color = color
        self._estado = 'en_reposo'
        self._motor = Motor(cilindros=4)
        self._lucesDelanteras = Luces(tipo='Frontales')

    def acelerar(self, tipo=despacio):
        if tipo == 'rapida':
            self._motor.inyecta_gasolina(10)
        else:
            self._motor.inyecta_gasolina(3)

    def encenderLuces(self):
        self._lucesDelanteras.encender()


class Motor:

    def __init__(self, cilindros, tipo='gasolina'):
        self.cilindros = cilindros
        self.tipo = tipo
        self._temperatura = 0

    def inyecta_gasolina(self, cantidad):
        pass


class Luces:

    def __init__(self, tipo='Frontales'):
        self.tipo = tipo

    def encender(self):
        print('Se encienden luces {}'.format(self.tipo))

    def apagar(self):
        print('Se apagan luces {}'.format(self.tipo))
