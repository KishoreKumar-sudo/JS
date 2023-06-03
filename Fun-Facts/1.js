//the new at() mtd for arrays allows you to access from either end easily.

const arr = ['a', 'b', 'c', 'd']

console.log(arr.at(0)) //a
console.log(arr.at(1)) //b
console.log(arr.at(2)) //c
console.log(arr.at(3)) //d

//the performance API can be used to calculate time b/w two events precisely (useful for benchmarking).
const start = performance.now()
const duration = performance.now() - start

console.log(start); //115.478600025177
console.log(duration); //0.03410005569458008(precise time duration)

let a=10
let b=20

