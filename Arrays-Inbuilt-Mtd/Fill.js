// syntax => array.fill(value, start, end)

//fill() mtd fills specified elements in an array with a value mtd overwrites the original array
//start & end position can be specified, if nt all elements will be filled 

//Fill alll the elements with a value

const fruits=["Banana","Orange","Apple","Mango"]
fruits.fill("Kiwi")
console.log(fruits) //[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]