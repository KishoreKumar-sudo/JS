let x = { a: 1 }
let y = Object.assign({}, x)

console.log(x === y);//false

//in dz case we are comparing teo strings using (>=) operator, it performs lexicographic(dictionary) comparison based upon unicode values of character.

let a = '10'
let b = '10'

console.log(a >= b); //true

