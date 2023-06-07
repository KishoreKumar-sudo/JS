//Copies all enumberable & own properties from the source objects to the target object.
//It returns the target object & also called shallow copy.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); //{ a: 1, b: 4, c: 5 }
console.log(returnedTarget);
/* [object Object]
{
    a: 1,
        b: 4,
            c: 5
} */