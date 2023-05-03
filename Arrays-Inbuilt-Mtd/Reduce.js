//reduce() mtd executes a reducer function for array element, dz mtd returns a single value & the function's accumulated result.

//syntax => array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [175, 50, 25]
numbers.reduce(myFunc)

function myFunc(total, num) {
    return total - num
}