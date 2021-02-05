class Lavadora:

    def __init__(self):
        pass

    def lavar(self, temperatura='caliente'):
        self.__llenar_tanque_de_agua(temperatura)
        self.__agitar(20)

    def __llenar_tanque_de_agua(self, temperatura):
        print(f'llenando el tanque con temperatura {temperatura}')

    def __agitar(self, tiempo):
        print(f'Agitando por {tiempo} min')


lavar = Lavadora()
lavar.lavar()
