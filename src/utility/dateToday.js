const getMonth = num => {
    let month = ''
    switch (num) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;    
        default:
            month ='NoMonth'
            break;
    }
    return month
}
const getTime = (time) => {
  return ('0' + time)
}
/*Function to display the date when the player is added*/ 
const dateToday = () => {
    const today = new Date()
    let monthNum = today.getMonth()
    let month = getMonth(monthNum)
    let date = today.getDate()
    if(date < 10) {
        date = getTime(date)
    }
    let year = today.getFullYear()
    let hours = today.getHours()
    if(hours < 10) {
        hours = getTime(hours)
    }
    let minutes = today.getMinutes()
    if(minutes < 10) {
        minutes = getTime(minutes)
    }
    let seconds = today.getSeconds()
    if(seconds < 10) {
        seconds = getTime(seconds)
    }
    return (`${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`)
     
}




export default dateToday
