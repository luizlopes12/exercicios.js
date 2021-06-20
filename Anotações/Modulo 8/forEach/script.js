let array = [1,2,2,2,2,1,0];
//é como se fosse um for simplificado com uma arrow function, deixa um comando de repetição bem menor
//o nome do parametro pode ser qualquer um, ele é bom para utilizar em arrays por ser simples
array.forEach(nums => {
    console.log(nums);
})

function add(){
array.push(7,7,7,7,7,7,9,9,8);
console.log("Os novos numeros são:")
array.forEach(nums => {
    console.log(nums);
})
}
function remove(){
    array.length = 0;
    array.unshift(1,1,0,0,1);
    console.log("Novos numeros")
    array.forEach(nums => {
        console.log(nums);
    })
}