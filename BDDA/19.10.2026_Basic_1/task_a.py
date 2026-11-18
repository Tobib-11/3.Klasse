#Gegeben seien zwei ganze Zahlen
# Gib als Ausgabe einer Funktion ihr Produkt nur zuück, wenn das Produkt
#-kleiner als 700 ist, andernfalls gebe ihre summe zurück


#Definition einer Funktion
def multiplication_or_sum(sum1, sum2):
    if num1 * num2 < 700:
        return num1 + num2
    else:
         return num1 * num2


#Einlesen einer Variable von der Konsole
num1String = input('Bitte zahl 1 eingeben:')
num2String = input('Bitte zahl 2 eingeben:')
num1 = int(num1String)
num2 = int(num2String)


#Aufruf der Funktion
value = multiplication_or_sum(num1 , num2)
print("Hier ist Das Ergebnis: ", value)



