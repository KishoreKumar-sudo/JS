//error occured

const firstName = "John"
const lastName = "Smith"
const videos = asserts.filter(asserts => asserts.type === "video")

console.log(firstName) //John
console.log(lastName) //Smith
console.log(videos)

//how to generate compact numbers?
const formatter = Intl.NumberFormat('en', { notation: 'compact' });
console.log(formatter.format(123)); //123
console.log(formatter.format(1234)); //1.2K
console.log(formatter.format(1235678)); //1.2M
console.log(formatter.format(1235678901)); //1.2B
