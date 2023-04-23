//syntax => array.some(function(value, index, arr),this)

//some() tests whether atleast one element in the array passes test implemented by provided function
// it returns "true" if, it finds an element for which provided function returns true
//otherwise it returns "false", it doesn't modify array.

const ages = [3, 10, 18, 20];
ages.some(checkAdult)

function checkAdult(age){
    
}