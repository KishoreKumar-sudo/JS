// syntax Array.isArray(obj)
//isArray() mtd returns true if an object is an array, otherwise false & check if an object is an array

let numbers = [1, 2, 3, 4, 5, 6]
let string = "CodeWithKishore"
let string1 = ["CodeWithKishore"]

console.log(Array.isArray(numbers));//true
console.log(Array.isArray(string));//false 
console.log(Array.isArray(string1));//true
