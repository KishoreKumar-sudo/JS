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

let n = [1, 2, 3, 4, 5]
let p = n.every((x) => x > 0);

console.log(p); //true