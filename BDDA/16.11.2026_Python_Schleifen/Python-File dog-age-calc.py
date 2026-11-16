dog_age_str = input('Your dogs age: ')
dog_age = int(dog_age_str)

if dog_age <= 1:
    print('Your dog is 14 years old.')
else:
    if dog_age <= 2:
        print('Your dog is 22 years old.')
    else:
        if dog_age > 2:
            dog_age_old = 22 + (dog_age - 2) * 5
            print(f'Your dog is {dog_age_old} years old.')


