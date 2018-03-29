class Bola:
    def __init__(self, cor, circunferencia, material):
        self.cor = cor
        self.circunferencia = circunferencia
        self.material = material

    def troca_cor(self, n_cor):
        self.cor = n_cor

    def mostrar_cor(self):
        return self.cor

bola =  Bola('preta', 25,'couro')
print(bola.mostrar_cor())
bola.troca_cor('verde')
print(bola.mostrar_cor())
