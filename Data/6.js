let x = [2]
let y = 2
console.log(x == y); //true
console.log(x === y); //false

//this is much confused question for beginners, in JS there is no array type data & even a function itself is an object.
let z = [1, 2, 3]
console.log(typeof z); //object

 //object! => when an array is created in JS, it's actually an object with integer-based keys that serve as the index of array elements.
//the array elements are stored as properties of dz object, with their corresponding index numbers as the property names.

