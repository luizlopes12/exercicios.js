//O destructuring faz com que variaveis peguem os valores diretamente de arrays ou objetos

let objeto = {
carroPortas: 4,
carroJanelas: 2,
carroAssentos: 4
}

// var {atributo do objeto: nome da variavel} = objeto de origem;
var {carroPortas: portas, carroJanelas: janelas, carroAssentos: assentos} = objeto;

console.log(`O carro tem ${portas} portas, ${janelas} janelas e ${assentos} assentos.`)


//Em arrays

let array = ["Matheus","João","Pedro","Luiz"];
//nos arrays só é preciso colocar o nome da variavel, pois o array vai pegar pelo indice
//por exemplo, o nome1 = primeiro dado do array ou seja, o indice 0
var [nome1,nome2,nome3] = array;

console.log(nome1,nome2,nome3)