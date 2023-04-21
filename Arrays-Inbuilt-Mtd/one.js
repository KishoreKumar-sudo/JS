// const array = [1, 2, 3]
// const result = array[3]
// console.log(result);


let array = [4, 5, 6]
array[7] = 7
console.log(array[4]);

let x = 5
let y = 6

x += x > y ? x : y //=> x+= means x = x + (x>y ? x:y)

//x = 5 + (5>6 ? 5:6)  
//x = 5 + 6 (x is less than y so it returns false value which is y and x is 5 plus so answer is 11)
//x=11

console.log(x);