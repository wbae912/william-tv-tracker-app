import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import tvContext from '../Context';

export default class AppNav extends Component {

  static contextType = tvContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  render() {
    return (
    <>
      <header className="header">
        <Link to="/dashboard"><h2 className="nav-app-title">TV Tracker</h2></Link>
      </header>
      <nav className="nav-app">
        <div className="app-links">
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/plan-to-watch'>Plan to Watch</Link>
          <Link to='/currently-watching'>Currently Watching</Link>
          <Link to='/completed'>Completed</Link>
          <Link to='/add-entry'>Add New Show</Link>
          <Link to='/'><button type="button" onClick={() => {this.handleLogoutClick(); this.context.toggleIsLoggedOff()}}>Logout</button></Link>
        </div>
      </nav>
    </>
    )
  }
}