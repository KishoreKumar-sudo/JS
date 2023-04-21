//the indexOf() mtd returns the 1st index(position) of a specified value, returns -1 if the value is not found & it searches from left to right
//negative start values counts from the last element(bt still reaches from left to right)

//syntax => array.indexOf(item, start)
let elements = ["Laptop", "Headset", "Mobile", "Router"]

console.log(elements.indexOf("Mobile"), 0); //2 0
console.log(elements.indexOf("Mobile"), 3);  //2 2
console.log(elements.indexOf("Tab"), 0); //-1 0