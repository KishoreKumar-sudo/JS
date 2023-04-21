//every() mtd tests whether all elements in array pass the test implemented by the provided function.
//it returns a boolean value

// syntax => every((element))=>{/* code */})
const array1 = [1, 30, 39, 29, 10, 13];
const isBelow_1 = (currentValue) => currentValue < 40;

console.log(array1.every(isBelow_1)); //true

const isBelow_2 = (currentValue) => currentValue < 30;

console.log(array1.every(isBelow_2)); //false
