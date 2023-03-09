const languages=["Java","Python","C","Javascript","Flutter","Go"]
function longestWord(arr){
    let longWord = arr[0];
    for (const item of arr) {
        if (item.length > longWord) {
            longWord = item;
        }
        return longWord;
    }
}
console.log(longestWord(languages));