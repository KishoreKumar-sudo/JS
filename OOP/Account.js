class Account {
    min_Bal = 5000;
    open_account() {
        console.log("Account opened successfully")
    }
    deposit_Amount() {
console.log("Deposited Amount")
    }
    get_Statement(){
        console.log("Get the Statement")
    }
    get_Balance(){
        console.log("No Balance Buddy")
    }
    withdraw_amount(){
        console.log("Month End")
    }
    close_account(){
        console.log("Go Back to Home")
    }
}
let a1 = new Account()
console.log(a1.min_Bal)
a1.open_account()
a1.deposit_Amount()
a1.get_Statement()
a1.get_Balance()
a1.withdraw_amount()
a1.close_account()