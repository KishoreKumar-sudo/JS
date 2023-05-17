let x = { a: 1 }
let y = Object.assign({}, x)

console.log(x === y);//false

//in dz case we are comparing teo strings using (>=) operator, it performs lexicographic(dictionary) comparison based upon unicode values of character.
//in dz case both a & b are strings with value '10', since both are strings are equal & comparison evaluates to be true.
let a = '10';
let b = '10';

console.log(a >= b); //true

let c = 10;
let d = 5;

console.log(!(c < d)); //true !(10<5), c is less than d then d will return false
//!(false) = true