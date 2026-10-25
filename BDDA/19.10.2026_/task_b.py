prevNum = 0
x = range(1,11)

for i in x:
    currNum = i + prevNum

    print("Aktuelle Zahl: ", i,
      "Previous Number: ", prevNum,
      "Summe aus den Nummern", currNum
      )

    prevNum = i