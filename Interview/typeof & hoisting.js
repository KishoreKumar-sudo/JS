let myNumber = 42
console.log(typeof(myNumber))

//to avoid hoisting using "use strict" on top of code:  
"use strict"
x=33;
var x;

//Hoisting
//deafult behaviour of js where all the variables & function declarations are moved on top:
function doSomething(){
    x=32
    console.log(x)
    var x
}

//Note - Variable initializations are not hoisted, only variable declarations are hoisted:
var x
x=33
console.log(x)



