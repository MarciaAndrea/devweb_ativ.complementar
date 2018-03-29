'''Classe Retangulo: Crie uma classe que modele um retangulo:

    Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
    Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
    Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades de um local.
    Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.'''
class retangulo:
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    
    def mudar_base(self, n_base):
        self.base = n_base

    def mudar_altura(self, n_altura):
        self.altura = n_altura

    def valor_base(self):
        return self.base

    def valor_altura(self):
        return self.altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)

r = retangulo(3, 2)
print("\nValor da base =  ", r.valor_base())
print("Valor da altura =  ", r.valor_altura())
print("Área do retângulo = ", r.area())
print("Perímetro do retângulo =  ", r.perimetro())
r.mudar_base(4.3)
print("Novo valor da base =  ", r.valor_base())
r.mudar_altura(2.5)
print("Novo valor da altura =  ", r.valor_altura())
print("")


	
	