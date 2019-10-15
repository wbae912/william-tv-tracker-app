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

export default class App extends Component {
  //MAY WANT TO SPLIT OUT RENDERS SO ONE RENDER FUNCTION HANDLES THE LANDING PAGE / NAV / FORMS
  //ANOTHE RENDER FUNCTION WILL BE ROUTES FOR ALL OF THE PAGES WHEN USER LOGS IN
  //AND MAIN RENDER COMBINES IT ALL
  
  render() {
    return (
      <div>
        <Route 
          exact
          path='/'
          component={LandingPage}
        />
        <AppNav />
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
      </div>
    )
  }
}