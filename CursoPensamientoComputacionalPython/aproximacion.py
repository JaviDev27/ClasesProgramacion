import time
objetivo = int(input('Escoge un numero: ')) 
epsilon = 0.0001
paso = epsilon**2
respuesta = 0.0

tiempo_inicio = time.time()

while abs(respuesta**2 - objetivo) >= epsilon  and respuesta <= objetivo:
    respuesta+=paso

if abs(respuesta**2 - objetivo) >= epsilon:
    print('No se encontro la raíz cuadrada')
else:
    print(f'La raíz cuadrada de {objetivo} es {respuesta}')
    
print(f'se demoró {time.time() - tiempo_inicio} segundos')
