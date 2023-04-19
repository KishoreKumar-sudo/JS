// JSON.parse() converts a JSON string to a JS object

let userInfoStr = `{ "name": "Ryan", "country": "UAE" }`
let userInfoObj = JSON.parse(userInfoStr)

//Converts to JS object
console.log(userInfoObj) //{"name":"Ryan","country":"UAE"}
