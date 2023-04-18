//bcz var can be updated, re-declared & re-initialized within its scope.

var num = 8
var num = 10

console.log(num); //10 

let x = []
let y = []
let z = x + y

console.log(typeof z); //string