streetWidth = 2.50
summeFrog = 0
jumpFrog = 1
spruengeFrog = 0


while summeFrog < streetWidth and jumpFrog > 1e-10:
    summeFrog += jumpFrog
    spruengeFrog += 1
    jumpFrog /= 2


if summeFrog >= streetWidth:
    print(f"Der Frosch schafft es nach {spruengeFrog} Sprüngen!")
else:
    print(f'Your frog didnt make it with {spruengeFrog} jumps.')