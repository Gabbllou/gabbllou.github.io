let number=Array();
for(let x=0;x<5;x++){
   number[x]= prompt("Digite um número inteiro");
}
number.sort(function(a,b){
   return a-b;
})
alert("O menor número digitado é: "+number[0]+" e o maior número digitado é: "+number[4]);