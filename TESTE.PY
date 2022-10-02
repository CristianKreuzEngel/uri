import math
while True:
    controle = input()
    if controle =='0':
        break

    a,b,c = (controle.split(" "))
    calc = (((int(a)*int(b))*100)/int(c))
    raiz = math.sqrt(calc)
    print(math.trunc(raiz))