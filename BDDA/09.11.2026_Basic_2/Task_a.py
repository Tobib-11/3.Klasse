#Schreibe ein Python-Skript, das eine Variable von der Konsole einliest.
#Überprüfe dann, ob die Zahl größer als 10 ist. Wenn ja, geben Sie den Text "Die
#Zahl ist größer als 10." aus, andernfalls den Text "Die Zahl ist 10 oder kleiner."


x = int(input('gib eine Zahl ein: '))
y = 10
if x >= y:
    print('Die Zahl ist größer als 10.')
else:
    print('Die Zahl ist 10 oder kleiner.')