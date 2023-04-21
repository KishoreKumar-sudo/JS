const names = ["rohit", "sky", "pollard", "ishan", "Rohit", "Pollard", "bumrah", "malinga"]
function removeDuplicate(arr) {
    let newArray =[];
    for (let i = 0; i< arr.length; i++) {
            if(!newArray.includes(arr[i].toLowerCase()))
            newArray.push(arr[i].toLowerCase());
    }
    return newArray
}

console.log(removeDuplicate(names));