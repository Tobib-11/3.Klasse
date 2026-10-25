colltzZahlen = [42, 21.0, 64.0, 32.0, 16.0, 8.0, 4.0, 2.0,
1.0]
print(colltzZahlen)
colltzInput = int(input("Bitte geben sie einen Wert von Collatz ein: "))

if colltzInput % 2 == 0:
    colltzInput = colltzInput // 2
else:
    colltzInput = (colltzInput * 3) +1

print(colltzInput)
