//"A" - "B" will result in NaN bcz we can't subtract one string from another
//when we concatenate "2" to NaN using the + operator, JS will convert NaN to a string & concatenate it with "2", resulting into string of "NaN2"  

console.log("A" - "B" + "2")

//replace() finds the first occurence of substring "Hell" within the string "Hello World", replaces it with "G" o/p as "Go World",
// modified string is assigned to variable y, then find the length of the string.
//(7 Characters + 1 empty space = 8 )
let x = "Hello World";
let y = x.replace("Hell", "G");

console.log(y); //Go World
console.log(y.length); //8