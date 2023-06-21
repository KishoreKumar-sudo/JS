//variables declared with the 'let' keyword are block-scoped, so even though 'a' is re-initialized to 20 within the if statement,
//that value of 'a' is only visible with if statement's block scope & console is in outer scope therefore it can be access 'a' variable in outer scope. 

let a = 10
if (a === 10) {
    let a = 20
}
console.log(a); //10

