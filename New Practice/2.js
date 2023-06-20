let x = [1, 2, 3];
let y = x.join("");
console.log(typeof y); //string

//the arrays are converted to strings '1,2' & '3,4' and they joined end to end ('1,23,4')
console.log([1, 2] + [3, 4]); //1,23,4

function Person(name) {
    this.name;
}

const john = new Person("John");
console.log(john.name); //undefined

//Bcz every element of n are greater than 0 and when all of the condition satisfies with "every" function, it returns true.
//If only one of the conditions were not satisfied then "false" would have been consoled. 
let n = [1, 2, 3, 4, 5]
let p = n.every((x) => x > 0);

console.log(p); //true

//Ans : True Every () : it executes the function for each array element. Return true if the function returns true for all elements and false when the function returns false for one element.

let name = "DAVE";
let school = "OXFORD";
name.toLowerCase();
school = school.toLowerCase();

console.log(name+school); //DAVEoxford