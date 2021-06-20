//O includes é para procurar um item em um array e ver se é true ou false o elemento procurado

let array = [1,2,3];
console.log(array.includes(2));
console.log(array.includes(5));
array.push(6,8,10);
console.log(array.includes(6));
console.log(array.includes(10));