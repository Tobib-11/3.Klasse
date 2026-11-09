#Definiere eine Funktion namens zaehle_positive_zahlen, die
#eine Liste von Zahlen entgegennimmt. Die Funktion soll mit einer for-
#Schleife die Liste durchlaufen und mit einer if-Bedingung zählen, wie
#viele der Zahlen positiv sind (größer als 0).
#Die Funktion soll die Gesamtanzahl der positiven Zahlen zurückgeben
#(return).
## Test-Liste meine_zahlen = [5, -2, 10, 0, 7, -1]
## Ausgabe: 3 (weil 5, 10, 7 positiv sind)

def zaehle_positive_zahlen(zahlen):
    output = 0
    for i in zahlen:
        if i > 0:
            output += 1
    return output

meine_zahlen = [5, -2, 10, 0, 7, -1]
ausgabe = zaehle_positive_zahlen(meine_zahlen)
print(ausgabe)