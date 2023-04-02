//use the "Set" object in JS to remove duplicates from an array in just one line of code

const arr=[1,2,3,4,4,2,1]
const uniqueArr=[...new Set(arr)]
console.log(uniqueArr); //[ 1, 2, 3, 4 ]
