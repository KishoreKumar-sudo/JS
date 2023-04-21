// findIndex() returns the index of the first element in an array that satifies provided testing function
//if no elements satisfy the testing function, then -1 is required

//syntax => array.findIndex(function(currentValue, index, arr), thisValue)

const array1 = [5, 12, 8, 130, 44]
const isLargeNumber = (element) => element > 13

console.log(array1.findIndex(isLargeNumber)); //3 130 is large number