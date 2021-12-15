import React, { Component } from 'react'
import Nature from './components/Nature'
import dateToday from './utility/dateToday'
import './App.css'

class App extends Component {
  state = {
    dateToday : dateToday()
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({dateToday : dateToday()})
   }, 1000);
 
  }

  render () {
   const {dateToday} = this.state
    return (
      <div className='container'>
        <Nature
        dateToday = {dateToday}
        />
      </div>
    )
  }

}

export default App

