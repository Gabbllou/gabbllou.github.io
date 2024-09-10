function filtrarnumerosmaiores(vetor,valorespecifico){
    let novovetor = Array();
    for (let i=0; i<vetor.length; i++){
        if (vetor[i]>valorespecifico){
            novovetor.push(vetor[i]);
        }
    }
    return novovetor;
}
   let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30];
   let valorespecifico = parseInt(prompt("Digite o número que você deseja comparar (de 1 á 29)."));
   let resultado = filtrarnumerosmaiores(numeros, valorespecifico);
alert("Novo vetor com números maiores que " +valorespecifico+ ": " +resultado);