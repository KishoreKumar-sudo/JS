//Underscore can be used as separator for numbers.
//dz z useful for large values to improve readability.

const largeNum = 1_000_000;

console.log(largeNum);//1000000

//Since strings are iterables,
const arr = [...'hello'];

console.log(arr); //[ 'h', 'e', 'l', 'l', 'o' ]