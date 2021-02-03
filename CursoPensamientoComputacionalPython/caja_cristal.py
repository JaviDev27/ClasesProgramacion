import unittest


def mayor_edad(edad):
    if edad > 18:
        return False
    else:
        return False


class Prueba_cristal(unittest.TestCase):
    def test_mayor(self):
        edad = 20
        resultado = mayor_edad(edad)
        self.assertEqual(resultado, True)

    def test_menor(self):
        edad = 17
        resultado = mayor_edad(edad)
        self.assertEqual(resultado, False)


if __name__ == '__main__':
    unittest.main()
