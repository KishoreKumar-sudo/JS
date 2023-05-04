// syntax => array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

//reduce() executes a reducer function for array element & dz mtd returns a single value, function's accumulated result.
//works from right to left

const numbers = [175, 50, 25]

numbers.reduceRight(myFunc)

function myFunc(total, num) {
    return total - num
}

console.log(numbers.reduceRight(myFunc)) //-200
