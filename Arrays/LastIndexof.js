//The lastIndexOf() mtd returns the last index (position) of a specified value, returns -1 if the value is not found,

//Negative start values counts from the last element(but still searches from left to right)
// syntax => array.lastIndexOf(item, start);

let elements = ["Laptop", "Headset", "Mobile", "Router", "Mobile"]

console.log(elements.indexOf("Mobile", 0)); //2 indexOf(): left to right
console.log(elements.lastIndexOf("Mobile", 4)); //4 lastIndexOf(): right to left
