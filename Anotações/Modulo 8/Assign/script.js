let carro = {
    portas: 4,
    marca: "Volvo" 
}
let carroAtt = {
    portamalas: true,
    tetoSolar: true
}
let carroDtt = {
    portaMalas: false,
    tetoSolar: false
}

console.log(carro);
Object.assign(carro, carroAtt);
console.log(carro);
Object.assign(carro, carroDtt);
console.log(carro);