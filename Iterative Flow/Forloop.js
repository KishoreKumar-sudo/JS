// condition checking & increment or decrements of the looping variable can be done in the same line.
//incase of for loop the declaration & initialization of looping variable, 

//(i=0) Initialization,
//(i<=25)Condition, 
//(i=i+1 i=i-1 (or) i++,i--)Increment/Decrement 

/* syntax => for([initialization];[condition];[final-expression]){
    Block of code
 } */

for (let i = 0; i <= 25; i++) {
    console.log(i)
}

var i = 666
function myFunc() {
    for (var i = 1; i < 10; i++) {
        console.log(i);
    }
}
myFunc() //