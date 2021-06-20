//o rest(...) possibilita que a função receba um numero indeterminado de parametros e utiliza-los

function seila(...nums){
    console.log("Os numeros são:")
    nums.forEach(nums => {
        console.log(nums)
    })
}
/* input
seila(91,212,121,2,12,34,13,4,25,23,231,1,45)
//resultado
 Os numeros são:
  91
  212
  121
  2
  12
  34
  13
  4
  25
  23
  231
  1
  45
*/