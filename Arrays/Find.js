//find() returns first element in the provided array that satisfies provided testing function
//if no values satisfy testing function, undefined is returned  

// syntax(arrow function) => find((element)=>{/* ... */})

const array = [5, 12, 8, 130, 44]
const found = array.find((element) => element > 10)

console.log(found); //12