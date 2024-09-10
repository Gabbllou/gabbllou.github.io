var n=Array();
var x=0;
var soma=0;
do{
    n[x]=parseFloat(prompt("Digite os números que quer somar (digite 0 para realizar a conta)"));
    x++;
}while(n[x-1] !==0);

for(let y=0;y<n.length;y++){
    soma+=n[y]
}
alert("A soma dos números é: "+soma)