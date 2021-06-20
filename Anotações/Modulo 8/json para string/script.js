/*
Para converter um json para string utilizamos o stringify(), para fazer ao contrario utilizamos o 
json.parse()
*/
let pessoa = {
    "nome": "Luiz",
    "idade": 17
}
let pessoaString = JSON.stringify(pessoa);
console.log(pessoaString);
console.log(JSON.parse(pessoaString))