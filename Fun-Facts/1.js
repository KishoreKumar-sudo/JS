//the new at() mtd for arrays allows you to access from either end easily.

const arr = ['a', 'b', 'c', 'd']

console.log(arr.at(0)) //a
console.log(arr.at(1)) //b
console.log(arr.at(2)) //c
console.log(arr.at(3)) //d

//
const start = performance.now()
const duration = performance.now() - start

console.log(start); //138.20899987220764
console.log(duration); //0.035199880599975586