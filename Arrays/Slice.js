// Syntax array.slice(start, end);
//dz mtd slices out a piece from an array, it creates a new array

let number = [1, 2, 3, 4, 5, 6];
let number1 = number.slice(1, 4)

console.log(number1); //[ 2, 3, 4 ]

//slice() mtd returns a new array containing the elements of original array starting from the specified start index,
//gng upto(nt including) the specified end index. if the start index is negative, it counts from the end of array.

const arr = [1, 2, 3, 4, 5];
const result = arr.slice(-3)

console.log(result); //[ 3, 4, 5 ]