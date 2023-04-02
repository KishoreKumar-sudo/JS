//syntax => array.sort(compareFunction)
//dz mtd sorts the elements of an array, the elements as strings in alphabetical and ascending order & overwrites the original array.
//sort() takes an "optional compare function"

let array = [99, 88, 77, 66, 55]
let string = ["Zebra", "Year", "Van", "Apple", "Calendar"]

array.sort();
console.log(array)//[ 55, 66, 77, 88, 99 ]

string.sort()
console.log(string);//[ 'Apple', 'Calendar', 'Van', 'Year', 'Zebra' ]