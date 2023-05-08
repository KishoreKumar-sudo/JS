//used async to make function act asynchronous
async function getWeatherData(){
    try {
        //used await to make the code wait until promise returns a result
        const res=await fetch('https://placeholder')
    } catch (error) {
        
    }
}