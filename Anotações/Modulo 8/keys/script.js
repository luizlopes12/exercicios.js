//uma key é o nome da propriedade em um objeto, o valor dela é só valor msm
let carro = {
    //key   valor
    portas: 4,
    marca: "Volvo" 
}

//para ver quantas e quais chaves temos em um objeto utilizamos o object keys
console.log(Object.keys(carro))

//retorno no console
// (2) ["portas", "marca"]
//(quantidade de chaves)["Nomes das chaves"]



//Assim como o object keys retorna as propriedades o object values retorna os valores das propriedades
console.log(Object.values(carro))
//retorno
//(2) [4, "Volvo"]