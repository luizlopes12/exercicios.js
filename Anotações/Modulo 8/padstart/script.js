let input = "122";

//O padstart padroniza e coloca numeros antes do numero até ficar com o numero de digitos ideal
console.log(input.padStart(6, "0"))//retorna 000122
//O padEnd funciona do mesmo jeito mas adiciona no final
console.log(input.padEnd(6, "0"))//retorna 122000