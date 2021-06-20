//O split pega uma frase e transforma em um array utilizando um parametro de separação
//nesse caso o paremetro são os espaços entre as palavras
//O join seria ao contrario, pega um array e transforma em string colocando o parametro no lugar da virgula
//vamos fazer e desfazer uma frase em array

let frase = "Bom dia desgraça da minha vida que eu amo tanto";
//divide as palavras por espaço
let array = frase.split(" ");
console.log(array);
//junta os itens por espaço
let arrayFrase = array.join(" ");
console.log(arrayFrase);