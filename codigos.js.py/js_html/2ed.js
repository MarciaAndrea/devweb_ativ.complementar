var n = prompt('Informe um número:');
console.log(n);

if(n == 0){
    document.write(n, " é um número Neutro.");
}

else if(n > 0){
    document.write(n, "  é número Positivo.");
}
else{
    document.write(n, " é número negativo.")
}
