var invert= prompt("Digite a palavra ou frase a ser  invertida: ")
invert = invert.split("");
invert = invert.reverse().join("");
document.write("<h6>Palavra  o frase Invertida:</h6> <br>", invert.toUpperCase())