// syntax => array.fill(value, start, end)

//fill() mtd fills specified elements in an array with a value mtd overwrites the original array
//start & end position can be specified, if nt all elements will be filled 

//Fill alll the elements with a value

const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.fill("Kiwi")
console.log(fruits) //[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

const vegetables = ["Beetroot", "Carrot", "Onion", "Tomato"]
vegetables.fill("Raddish", 2, 4)
console.log(vegetables); //[ 'Beetroot', 'Carrot', 'Raddish', 'Raddish' ]F