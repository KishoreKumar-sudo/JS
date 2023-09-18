//error occured

const firstName = "John"
const lastName = "Smith"
const videos = asserts.filter(asserts => asserts.type === "video")

console.log(firstName)
console.log(lastName)
console.log(videos)

//how to generate compact numbers?
const formatter =Intl.NumberFormat('en',{notation:'compact'});
formatter.format(123);
formatter.format(1234);

