const myArray = [1, 2, 3, 4]

//Removes the first element(1) from the array & returns it.
console.log(myArray.shift());  //1 got removed 
console.log(myArray); //[ 2, 3, 4 ]

//Adds the element 0 to the beginning of array & returns the new length.
console.log(myArray.unshift(0));
console.log(myArray); //[ 0, 2, 3, 4 ]

//Adds the element 5 to the end of array & returns the new length.
console.log(myArray.push(5));
console.log(myArray); //[ 0, 2, 3, 4, 5 ]

//Removes the last element (5) from the array & returns it.
console.log(myArray.pop()); //5 got removed
console.log(myArray); //[ 0, 2, 3, 4 ]