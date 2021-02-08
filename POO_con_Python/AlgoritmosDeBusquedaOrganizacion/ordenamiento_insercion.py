lista = [5, 10, 3, 7, 4, 2, 6, 1, 9]

for i in range(1, len(lista)):

    # Empezamos con el indice 1, por que el numero que
    # empecemos agarremos como indice o que lo pasemos en
    # una sub lista va a ser comparado con los valores
    # quese encuentran a la izquierda

    actual = lista[i]  # Este es el numero quese va a ir a la sublista
    indice = i  # Este es el numero que le vamos a hacer la comparacion, este es el indice de partida enla direccion dela izquierda

    while indice > 0 and lista[indice - 1] > actual:

        # Con esto vamos a disminuir el valor, hasta llegar al menor dela lista para colocarlo antes desu posicion
        lista[indice] = lista[indice - 1]
        # En este momento evaluamos de nuevo la condicion del bucle while, para seguir recorriendo la lista
        indice = indice - 1

    # Insertamos en esta lista el elemento que teniamos guardado enla variable actual o en nuestra sublista
    lista[indice] = actual


print(lista)
