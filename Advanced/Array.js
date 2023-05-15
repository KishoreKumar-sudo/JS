const fruits = ['Apple', 'Banana', 'Grapes', 'Orange', 'Strawberry', 'Apple']

//converts the array to a string
console.log(fruits.toString()); //Apple,Banana,Grapes,Orange,Strawberry,Apple

//adds element @ the end of array
console.log(fruits.push('Pineapple'));
console.log(fruits.toString()); //Apple,Banana,Grapes,Orange,Strawberry,Apple,Pineapple

//removes the last element of array
console.log(fruits.pop());//Pineapple

//checks if array contains an element
console.log(fruits.includes('Banana')); //true

console.log(fruits.indexOf('Strawberry')); //4

console.log(fruits.join('+')); //Apple+Banana+Grapes+Orange+Strawberry+Apple