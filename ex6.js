var surpresa=6;
do{
    var n=parseFloat(prompt("Existe um número surpresa, digite a sua hipótese:"));
    if(n===6){
        alert("Você acertou!");
    }else{
        alert("Você errou!");
    }
}while(n!==surpresa)