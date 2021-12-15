const getMonth = num => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[num]
    return month
}
const getTime = (time) => {
    if (time < 10) {
      time = '0' + time
  }  
  return time
}

const dateToday = () => {
    const today = new Date()
    let monthNum = today.getMonth()
    let month = getMonth(monthNum)
    let date = getTime(today.getDate())
    let year = today.getFullYear()
    let hours = getTime(today.getHours())
    let minutes = getTime(today.getMinutes())
    let seconds = getTime(today.getSeconds())
    return (`${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`)
     
}




export default dateToday
