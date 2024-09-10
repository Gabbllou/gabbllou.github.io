let palavras = ["sol", "lua", "estrela", "lua", "estrela", "céu","sol", "lua", "estrela", "céu",
 "lua", "estrela", "céu", "sol", "lua", "estrela", "lua", "estrela", "céu", "sol", "lua", "estrela", "céu", "sol", "lua", "estrela", "céu",
 "sol", "lua", "estrela", "céu", "sol", "lua", "estrela", "céu","sol", "lua", "estrela", "céu","sol", "sol", "lua", "estrela", "céu","sol", "lua", "estrela",
 "sol", "lua", "sol", "lua", "estrela", "céu", "céu"];
let palavraespecifica = prompt("Escolha uma das palavras: sol, lua, estrela, céu").toLowerCase();
let contagem = 0;

for (let i=0; i<palavras.length; i++){
  if (palavras[i] === palavraespecifica){
    contagem++;
  }
}

alert("a palavra aparece:"+contagem+" vezes")