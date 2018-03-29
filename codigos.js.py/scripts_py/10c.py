'''Classe TV: Faça um programa que simule um televisor criando-o como um objeto.
 O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. 
Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.'''

class tv:
    def __init__(self, canal, volume):
        self.canal = canal
        self.volume = volume

    def mudar_canal(self, n_canal):
        if self.canal >= 0 and self.canal <= 100:
            self.canal = n_canal


    def mostrar_canal(self):
        return self.canal

    def mudar_volume(self, n_volume):
        if self.volume >= 0 and self.volume <= 100:
            self.volume = n_volume

    def mostrar_volume(self):
        return self.volume

t = tv(10, 15)
print("\nCanal = ", t.mostrar_canal())
t.mudar_canal(21)
print("Novo canal = ", t.mostrar_canal())
print("Volume = ", t.mostrar_volume())
t.mudar_volume(18)
print("Aumentar volume = ", t.mostrar_volume())
t.mudar_volume(10)
print("Diminuir volume = ", t.mostrar_volume())
print("")


        
	 
