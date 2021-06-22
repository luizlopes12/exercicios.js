let obj = {
    do: () => console.log("Fazer uma coisa"),
    seila: (a,b) => console.log(`Resultado = ${a + b}`)
}


// o prototype é para descobrir a herança de um objeto pai para um objeto filho
//por exemplo, podemos criar um objeto a partir de outro, assim o primeiro tera uma ligação de 
//herança com o segundo
//O "pai" padrão de todos os objetos é o Object

//aqui estamos criando o obj2 a partir do obj
let obj2 = Object.create(obj);
//O prototype do obj2 é o obj, e o do obj é o Object
console.log(Object.getPrototypeOf(obj2))
console.log(Object.getPrototypeOf(obj))
//O prototype do obj2 não é o Object, pois ele foi criado a partir do obj, retorna false
console.log(Object.getPrototypeOf(obj2) == Object.prototype);
//O prototype do é o Object, pois ele não foi criado a partir de outro, retorna true
console.log(Object.getPrototypeOf(obj) == Object.prototype);
//se procuramos no obj2 uma função do obj, será retornado a função independente de qual dos dois tem ela
