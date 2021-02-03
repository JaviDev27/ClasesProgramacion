import sys

"""
3= 3*2*1
4=4*3*2*1

"""


def factorial(numero):
    """Calcula el factorial de n

    Args:
        numero (int): numero a calcular el factorial
    """

    if numero == 1:
        return 1
    return numero*factorial(numero-1)


print(factorial(8))

# Mostramos el limite de recursividad actual
print(sys.getrecursionlimit())
