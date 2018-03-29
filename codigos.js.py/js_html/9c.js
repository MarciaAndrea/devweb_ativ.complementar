/*Classe Retangulo: Crie uma classe que modele um retangulo:

    Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
    Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
    Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades de um local.
    Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.*/
	
var retangulo = {
	base: 5,
	altura: 4,
	
	mudarBase: function(nBase){
		this.base = nBase;
		
		
	},
	mudarAltura: function(nAltura){
		this.altura = nAltura;
		
	},

	valorBase: function(){
		return this.base;
	},
	valorAltura: function(){
		return this.altura;
	},

	area: function(){
		return this.base * this.altura;
	},

	perimetro: function(){
		return 2 * (this.base + this.altura);
	}


}

document.write("Base do Retangulo: ", (retangulo.valorBase()));
document.write(" => Altura do Retangulo: ", (retangulo.valorAltura()));
document.write(" => Área do Retangulo: ", (retangulo.area()));
document.write(" => Perímetro do Retangulo: ", (retangulo.perimetro()));
retangulo.mudarBase(3);
retangulo.mudarAltura(1);
document.write(" => Nova base do Retangulo: ", (retangulo.valorBase()));
document.write(" => Nova altura do Retangulo: ", (retangulo.valorAltura()));
