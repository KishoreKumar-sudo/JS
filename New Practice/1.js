//"A" - "B" will result in NaN bcz we can't subtract one string from another
//when we concatenate "2" to NaN using the + operator, JS will convert NaN to a string & concatenate it with "2", resulting into string of "NaN2"  

console.log("A" - "B" + "2")

let x = "Hello World";
let y = x.replace("Hell", "G");

console.log(y);
console.log(y.length);