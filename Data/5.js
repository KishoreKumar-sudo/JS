const a = 'text'.split('t')
console.log(a); //[ '', 'ex', '' ]
console.log(a[1]); //ex

let b = 10
{
    let b = 20
}
console.log(b != 20); //true
console.log(b == 20); //false
b = 30

console.log(true + false); //(1 + 0 => 1)

//A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal
// All other strings are considered decimal.
const num = parseInt('7*6', 10)

console.log(num); //7