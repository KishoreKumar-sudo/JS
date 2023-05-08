//used async to make function act asynchronous
async function getWeatherData() {
    try {
        //used await to make the code wait until promise returns a result
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}