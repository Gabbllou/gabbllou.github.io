var n = parseFloat(prompt("Digite um número para saber se é positivo ou negativo"));

if(n<0){
    alert(n+" é negativo");
}else if(n>0){
    alert(n+" é positivo");
}else if(n===0){
    alert(n+" é neutro")
}else{
    alert("isso não é um número")
}