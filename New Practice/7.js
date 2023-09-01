//in JS as we know var declared and initialized outside the function become global variables that means we use this anywhere in the code.
//so here x is global variable(bcz it doesn't declare inside any function), we can use this anywhere in the code.
var x = "Hello Word";
function myFunc() {
    alert(x)
}