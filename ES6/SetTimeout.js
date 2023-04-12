setTimeout(() => {
    console.log(1)
}, 0);
console.log(2);

var i
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
//first undefined
// NaN
// 0
// 1
// 2

console.log("first", i)