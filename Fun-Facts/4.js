//the following syntax provides both the index & value when iterating over an array

const arr = ['foo', 'bar', 'baz'];

for (const [key, value] of arr.entries()) {
    console.log(key, value);
}

/* 0 foo
1 bar
2 baz
 */

//Any piece of code inside a class is automatically evaluated in strict mode, even if there is no use strict
class MyClass {
    //Evaluation here is strict
}