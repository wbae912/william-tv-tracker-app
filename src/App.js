import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import AppNav from './AppNav/AppNav';
import PlanToWatch from './PlanToWatch/PlanToWatch';
import CurrentlyWatching from './CurrentlyWatching/CurrentlyWatching';
import Completed from './Completed/Completed';
import AddForm from './AddForm/AddForm';
import LoginForm from './LoginForm/LoginForm';
import Context from './Context';

export default class App extends Component {
  //MAY WANT TO SPLIT OUT RENDERS SO ONE RENDER FUNCTION HANDLES THE LANDING PAGE / NAV / FORMS
  //ANOTHE RENDER FUNCTION WILL BE ROUTES FOR ALL OF THE PAGES WHEN USER LOGS IN
  //AND MAIN RENDER COMBINES IT ALL

  //DELETE AND EDIT will be in here and then send those down as contexts
  constructor(props) {
    super(props)
  
    this.state = {
       shows: []
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:8000/api/shows/all`)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong')
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        shows: data
      })
    })
    .catch(error => {
      alert(`Error: ${error.message}`)
    })
  }

  deleteTvShow = (tvId) => {
    return (
      fetch(`http://localhost:8000/api/shows/all/${tvId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(() => {
        this.setState({
          shows: this.state.shows.filter(show => show.id !== tvId)
        })
      })
    )
  }
  
  render() {
    return (
      <div>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <AppNav />
        <Context.Provider
          value={{
            deleteTvShow: this.deleteTvShow,
            shows: this.state.shows
          }}>
          <Route 
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            path='/plan-to-watch'
            component={PlanToWatch}
          />
          <Route
            path='/currently-watching'
            component={CurrentlyWatching}
          />
          <Route
            path='/completed'
            component={Completed}
          />
          <Route
            path='/add-entry'
            component={AddForm}
          />
          <Route
            path='/login'
            component={LoginForm}
          />
        </Context.Provider>
      </div>
    )
  }
}