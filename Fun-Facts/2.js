//#ONF
//the Date object is smart enough to automatically adjust any overflows in month, date or time values.

const foo = new Date('May 25, 2023 00:00:00');
foo.setDate(foo.getDate() + 1);
console.log(foo);  //2023-05-25 

//the classic for loop can be prefixed with await to iterate over an array of promises, 
// but wait for each promise to resolve before moving to the next.

async function test() {
    const promises = [/*  */]
    for await (const result of promises) {
        //..
    }
}