// Functions that operate on other functions,
// either by taking them as arguments or by returning them,are called higher-order functions.
function highorder(fn) {
    (fn)
}
highorder(function (fn) { console.log("hello kk"); })
console.log(highorder)  