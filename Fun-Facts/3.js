//Underscore can be used as separator for numbers.
//dz will useful for large values to improve readability.
const largeNum = 1_000_000;

console.log(largeNum);//1000000

//Since strings are iterables, they are split into array of characters by using spread operator.
const arr = [...'hello'];

console.log(arr); //[ 'h', 'e', 'l', 'l', 'o' ]