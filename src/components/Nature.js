import React from 'react'
import Morning from '../Images/sun_rise.png'
import Aftenoon from '../Images/afternoon.jpg'
import Evening from '../Images/sunset.jpg'

const Nature = (props) => {
    const {dateToday} = props
    let greetings = 'Morning'
    let image = Morning
    const hour = new Date().getHours()
   if(hour<12 ) {
     greetings = 'Morning'
     image = Morning
    }
   else if ((hour>=12) && (hour<17)) {
        greetings = 'Afternoon'
        image = Aftenoon
    }
    else {
        greetings = 'Evening'
        image = Evening
    }
    
    let backgroundStyle = {
        background: `url(${image})no-repeat center center/cover`,
      }


    return (
        <div className='greetings' style = {backgroundStyle}>
            <h1 className = "timer">{dateToday}</h1>
            <h1> Good {greetings}</h1>
        </div>
    )
}

export default Nature
