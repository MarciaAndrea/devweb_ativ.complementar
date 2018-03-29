'''Faça um programa, com uma função que necessite de um argumento. 
A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.'''

def valor(v):
    if v > 0:
        return 'p'
    else:
        return 'N'
print(valor(0))

