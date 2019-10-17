import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';

export default class AppNav extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  render() {
    return (
    <nav className="nav-app">
      <div className="app-links">
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/plan-to-watch'>Plan to Watch</Link>
        <Link to='/currently-watching'>Currently Watching</Link>
        <Link to='/completed'>Completed</Link>
        <Link to='/add-entry'>Add New Show</Link>
        <Link to='/'><button type="button" onClick={() => this.handleLogoutClick()}>Logout</button></Link>
      </div>
    </nav>
    )
  }
}