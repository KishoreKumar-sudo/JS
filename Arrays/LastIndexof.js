// syntax => array.lastIndexOf(item, start);
//Negative start values counts from the last element(but still searches from left to right)

let elements = ["Laptop", "Headset", "Mobile", "Router", "Mobile"]

console.log(elements.indexOf("Mobile", 0)); //2 indexOf(): left to right
console.log(elements.lastIndexOf("Mobile", 4)); //4 lastIndexOf(): right to left
