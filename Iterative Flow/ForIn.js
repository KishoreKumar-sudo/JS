//for..in loop is used to iterate over the properties of an object 

//syntax
/* for (variableName in object){
    Block of code
} */

const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
    console.log(`${prop}:${obj[prop]}`);
}
/* a:1
b:2
c:3 */