import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import AppNav from './AppNav/AppNav';
import PlanToWatch from './PlanToWatch/PlanToWatch';
import CurrentlyWatching from './CurrentlyWatching/CurrentlyWatching';
import Completed from './Completed/Completed';
import AddForm from './AddForm/AddForm';
import LoginForm from './LoginForm/LoginForm';
import EditForm from './EditForm/EditForm';
import Context from './Context';
import TokenService from './services/token-service';
import RegistrationForm from './RegistrationForm/RegistrationForm';
// import PublicOnlyRoute from './Utils/PublicOnlyRoute';
// import PrivateRoute from './Utils/PrivateRoute';

export default class App extends Component {
  //MAY WANT TO SPLIT OUT RENDERS SO ONE RENDER FUNCTION HANDLES THE LANDING PAGE / NAV / FORMS
  //ANOTHE RENDER FUNCTION WILL BE ROUTES FOR ALL OF THE PAGES WHEN USER LOGS IN
  //AND MAIN RENDER COMBINES IT ALL 

  constructor(props) {
    super(props)
  
    this.state = {
       shows: []
    }
  }
  
  getAllShows() {
    fetch(`http://localhost:8000/api/shows/all`, {
      headers: {
      'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
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

  componentDidMount() {
    if(!TokenService.getAuthToken()) {
      return
    } else {
      this.getAllShows()
    }
  }


  // componentDidMount() {
  //   if(TokenService.hasAuthToken()) {
  //     return this.getAllShows();
  //   }
  // }


  //DEFINE FUNCTION BY SEARCH TERM, ETC...IF WE WANT TO USE SAME ENDPOINT...USE SEARCH QUERIES ?SORT..GENRE

  deleteTvShow = (tvId) => {
    return (
      fetch(`http://localhost:8000/api/shows/all/${tvId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
      .then(() => {
        this.setState({
          shows: this.state.shows.filter(show => show.id !== tvId)
        })
      })
    )
  }


  addTvShow = (newShow) => {
    fetch('http://localhost:8000/api/shows/all', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newShow)
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        shows: [...this.state.shows, data]
      })
    })
    .catch(error => {
      alert(`Error: ${error.message}`)
    })
  }

  updateTvShow = (updatedShow) => {
    const newShows = this.state.shows.map(show => 
      (show.id === updatedShow.id)
        ? updatedShow
        : show
      );
      this.setState({
        shows: newShows
      })
  }
  
  render() {
    console.log(this.state.shows);
    return (
      <div className="app">
      <Context.Provider
        value={{
          deleteTvShow: this.deleteTvShow,
          addTvShow: this.addTvShow,
          updateTvShow: this.updateTvShow,
          shows: this.state.shows,
          getAllShows: this.getAllShows
        }}>
        <Header />
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
        <Route
          path={'/register'}
          component={RegistrationForm}
        />
        <Route
          path={'/login'}
          component={LoginForm}
        />
        <Route 
          path={['/dashboard', '/plan-to-watch', '/currently-watching', '/completed', '/add-entry', '/edit-entry/:id']} 
          component={AppNav}
        />
        <Route 
          path={'/dashboard'}
          component={Dashboard}
        />
        <Route
          path={'/plan-to-watch'}
          component={PlanToWatch}
        />
        <Route
          path={'/currently-watching'}
          component={CurrentlyWatching}
        />
        <Route
          path={'/completed'}
          component={Completed}
        />
        <Route
          path={'/add-entry'}
          component={AddForm}
        />
        <Route 
          path={'/edit-entry/:id'}
          component={EditForm}
        />
      </Context.Provider>
    </div>
    )
  }
}