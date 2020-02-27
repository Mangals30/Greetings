  import React, { Component } from 'react'
import Nature from './components/Nature'
import dateToday from './utility/dateToday'
import './App.css'

class App extends Component {
  state = {
    users : ['Mangalam' ,'Sanjay','Shwetha','Sharanya','Jayaraman','Krishnan','Revathy'],
    user : '',
    dateToday : dateToday()
  }
  componentDidMount () {
    const users = this.state.users
    let index = Math.floor(Math.random()*users.length)
    this.setState({user : users[index]})
    setInterval(() => {
      this.setState({dateToday : dateToday()})
   }, 1000);
 
  }

  render () {
   const {user,dateToday} = this.state
    return (
      <div>
        <Nature
        user = {user}
        dateToday = {dateToday}
        />
      </div>
    )
  }

}

export default App

