//Para um objeto ser igual a outro precisamos criar um objeto e copiar os valores do objeto que queremos 
let carro1 = {
    portas: 4,
    marca: "Volvo" 
}
carro2 = carro1;
// o objeto carro2 recebe todos os valores de carro1
let carro3 = {
    portas: 4,
    marca: "Volvo" 
}
//não estou pegando os valores do carro1, e sim criando novas propriedades no carro 3

console.log(carro1 == carro2);//True
console.log(carro1 == carro3);//false