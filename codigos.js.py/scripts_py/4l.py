#Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
vet = []

print ('Informe 5 números inteiros:\n')
for i in range(5):
 	vet.append(int(input('Número '+ str(i+1) + ': ')))

print ('\nVetor = ', vet) 
print('\n')

