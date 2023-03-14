function displayTime(){
    let dateTime = new Date() 
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
}
setInterval(displayTime, 500)