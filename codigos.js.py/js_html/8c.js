/*Classe Quadrado: Crie uma classe que modele um quadrado:

    Atributos: Tamanho do lado
    Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;
*/

var quadrado = {
	tamanho: 16,
	lado: 4,
	
	mudarValor: function(nLado){
	this.lado = nLado;

	},
	valorLado: function(){
		return this.lado;
	},

	calcularArea: function(){
		return this.lado * this.lado;

	}
}
document.write("Valor do lado do quadrado: ", quadrado.valorLado());
document.write(" => Area do quadrado: ",(quadrado.calcularArea()));
quadrado.mudarValor(5);
document.write(" => Novo valor do lado do quadrado: ",(quadrado.valorLado()));


