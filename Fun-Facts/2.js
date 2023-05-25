//the Date object is smart enough to automatically adjust any overflows 

const foo = new Date('May 25, 2023 00:00:00');
foo.setDate(foo.getDate() + 1);
console.log(foo);  //2023-05-25 