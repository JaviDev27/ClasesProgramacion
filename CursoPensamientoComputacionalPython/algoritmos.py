def busquedaBinaria(objetivo):

    epsilon = 0.01
    bajo = 0.0
    alto = max(1.0, objetivo)
    respuesta = (alto + bajo)/2

    while abs(respuesta**2 - objetivo) >= epsilon:
        #print(f'bajo {bajo}, alto {alto}, respuesta{respuesta}')
        if respuesta**2 < objetivo:
            bajo = respuesta
        else:
            alto = respuesta

        respuesta = (alto+bajo)/2

    print(f'La raíz cuadrada de {objetivo} es {respuesta}')


def aproximacioSucesiones(objetivo):
    epsilon = 0.01
    paso = epsilon**2
    respuesta = 0.0

    while abs(respuesta**2 - objetivo) >= epsilon and respuesta <= objetivo:
        respuesta += paso

    if abs(respuesta**2 - objetivo) >= epsilon:
        print('No se encontro la raíz cuadrada')
    else:
        print(f'La raíz cuadrada de {objetivo} es {respuesta}')


def enumeracionExhaustiva(objetivo):

    respuesta = 0

    while respuesta**2 < objetivo:
        # print(respuesta)
        respuesta += 1

    if respuesta**2 == objetivo:
        print(f'la raiz cuadrada de {objetivo} es {respuesta}')
    else:
        print(f'{objetivo} no tiene una raiz cuadrada exacta')


busquedaBinaria(25)
aproximacioSucesiones(25)
enumeracionExhaustiva(25)
