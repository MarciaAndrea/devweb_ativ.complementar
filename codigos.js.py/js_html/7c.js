/*Classe Bola: Crie uma classe que modele uma bola:

    Atributos: Cor, circunferência, material
    Métodos: trocaCor e mostraCor */

var bola = {
  cor: "alvinegra",
  circunferencia: 25,
  material: "coro",

  trocarCor: function(nCor){
    this.cor = nCor;
  },

  mostarCor: function(){
    return this.cor;

  }

};

document.write("Cor original da bola = ", bola.mostarCor());
bola.trocarCor("verde");
document.write(" => Nova Cor  = ", bola.mostarCor());
