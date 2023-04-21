//syntax => array.filter(function(currentValue, index, arr), thisValue)

//filter() creates a new array filled with elements that pass a test provided by a function & dz mtd does not change the original array

const ages = [32, 44, 16, 50]
const result = ages.filter(checkAdult)

function checkAdult(age) {
    return age >= 18;
}

console.log(result) //[ 32, 44, 50 ]