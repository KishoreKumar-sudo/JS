// syntax => delete array[index];
//Array elements can be deleted using the JS opeartor delete & using delete leaves undefined holes in the array
let fruits = ["Apple", "Banana", "Grapes"]
delete fruits[2];
console.log(fruits);// ['Apple', 'Banana', <1 empty item> ]