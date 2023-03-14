function displayTime(){
    let dateTime = new Date() 
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    document.getElementById('hours').innerHTML=hr
    document.getElementById('minutes').innerHTML=min
    document.getElementById('seconds').innerHTML=sec

}
setInterval(displayTime, 500)