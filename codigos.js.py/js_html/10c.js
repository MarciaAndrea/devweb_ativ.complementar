/*Classe TV: Faça um programa que simule um televisor criando-o como um objeto.
 O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. 
Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.*/ 

var tv ={
    canal: 10,
    volume: 16,

   mudarCanal: function(nCanal){
    if(this.canal >= 0 && this.canal <= 100)
    this.canal = nCanal;

    },
    mostrarCanal: function(){
        return this.canal;
   
       },
     mudarVolume: function(nVolume){
        if(this.volume >= 0 && this.volume <= 100)
        this.volume = nVolume;
    
        },
       
    
    mostrarVolume: function(){
        return this.volume;

    },

}

document.write("Canal = ", (tv.mostrarCanal()));
tv.mudarCanal(14);
document.write(" => Mudar para Canal = ", (tv.mostrarCanal()));
document.write(" => Volume = ", (tv.mostrarVolume()));
tv.mudarVolume(18);
document.write(" => Aumentar volume = ", (tv.mostrarVolume()));
tv.mudarVolume(12);
document.write(" => Diminuir volume = ", (tv.mostrarVolume()));