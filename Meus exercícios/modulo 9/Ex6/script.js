let nomes = ["Luiz", "Pedro", "João", "Roberto", "Marcos"];
let nums = [2,1,4,5];

function verificar(elemento){
    if(elemento.length >= 5){
        console.log("Muitos elementos!")
    }
    else if(elemento.length <= 5){
        console.log("Poucos elementos!")
    }
}
console.log(verificar(nomes));
console.log(verificar(nums));