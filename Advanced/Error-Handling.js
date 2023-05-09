/* error handling in js */
function foo() {
    //try catch block
    try {
        // ...
    } catch (e) {
        //catch error
        //....
    }
}
//executes when a JS promise that has no rejection handler is rejected

window.addEventListener('unhandledrejection', function () { });
