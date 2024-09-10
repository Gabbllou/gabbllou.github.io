function encontrarmedia(vetor){
    let soma=0;
    for(let i=0; i<vetor.length; i++){
        soma += vetor [i];
    }
    let media = soma / vetor.length;
    return media;
}

function criarvetor(qtdItens){
    let vetor = Array();
    for(let i=0; i < qtdItens; i++){
        vetor[i] = parseInt(prompt("Digite o valor:"));
    }
    return vetor;
}
var quantidade = parseInt(prompt("Digite a quantidade de valores que deseja saber a média"));
const array = criarvetor(quantidade);
alert("A média desses números é: "+encontrarmedia(array));
