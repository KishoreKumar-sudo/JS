var arr =[2,3,5,7,11,5,13,7]

/* for (a of arr){
    console.log(arr.indexOf(a))
}
console.log(arr.length); */

function removeDuplicates() {
    return arr.filter((item, index) => arr.indexOf(item) === index)

}
console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr).length)

//default method for removing duplicate
let newArr = [...new Set(arr)]
console.log(newArr) 