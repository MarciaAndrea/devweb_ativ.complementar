'''Classe Quadrado: Crie uma classe que modele um quadrado:

    Atributos: Tamanho do lado
    Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;'''
    
class quadrado:
    def __init__(self, tamanho, lado):
            self.tamanho = tamanho
            self.lado = lado

    def mudar_lado(self, n_lado):
        self.lado = n_lado

    def mostrar_lado(self):
        return self.lado

    def area(self):
        return self.lado * self.lado

q = quadrado(25, 5)
print("\nLado do quadrado = ", q.mostrar_lado())
print("Área do quadrado = ", q.area())
q.mudar_lado(4.5)
print("Novo lado do quadrado = ", q.mostrar_lado())
print("")