import random


def ordenamiento_burbuja(lista):
    n = len(lista)

    for i in range(n):
        for j in range(0, n-i-1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

    return lista


if __name__ == '__main__':
    tamaño_lista = int(input('De que tamaño será la lista?: '))
    lista = sorted([random.randint(0, 100) for i in range(tamaño_lista)])

    lista_ordenada = ordenamiento_burbuja(lista)

    print(lista_ordenada)
