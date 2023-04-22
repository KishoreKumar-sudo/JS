// syntax => array.copyWithin(target, start, end)

//copywithin() mtd copies array elements to another position in the array, dz mtd overwrites existing values
//it doesn't add items to the array

//copy the frst two array elements to the last two array elements

const fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.copyWithin(2, 0)
console.log(fruits);

const vegetables = ["Beetroot", "Carrot", "Onion", "Tomato","",""]
