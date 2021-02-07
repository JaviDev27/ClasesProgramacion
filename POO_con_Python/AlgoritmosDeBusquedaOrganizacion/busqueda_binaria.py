import random


def busqueda_binaria(lista, comienzo, final, objetivo, iteracion):

    print(f'Buscando {objetivo} entre {lista[comienzo]} y {lista[final-1]}')
    iteracion += 1

    if comienzo > final:
        print(f'Tiene {iteracion} iteraciones')
        return False

    medio = (comienzo + final)//2

    if lista[medio] == objetivo:
        print(f'Tiene {iteracion} iteraciones')
        return True
    elif lista[medio] < objetivo:
        return busqueda_binaria(lista, medio + 1, final, objetivo, iteracion)
    else:
        return busqueda_binaria(lista,  comienzo, medio - 1, objetivo, iteracion)


if __name__ == '__main__':
    tamaño_lista = int(input('De que tamaño será la lista?: '))
    objetivo = int(input('Qué numero quieres encontrar? :'))
    lista = sorted([random.randint(0, 100) for i in range(tamaño_lista)])

    encontrado = busqueda_binaria(lista, 0, len(lista), objetivo, 0)

    print(lista)

    print(
        f'El elemento objetivo {objetivo} {"esta" if encontrado else "no esta"} en la lista')
