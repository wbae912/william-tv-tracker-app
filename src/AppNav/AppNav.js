import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import tvContext from '../Context';
import './AppNav.css';

export default class AppNav extends Component {

  static contextType = tvContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  render() {
    return (
      <header className="appnav-header">
        <div className="appnav-logo-header">
          <div className="appnav-logo-div">
            <Link to='/dashboard'><i className="fa fa-tv fa-2x"></i></Link>
          </div>
          <Link to='/dashboard'><h2 className="appnav-title">TV Tracker</h2></Link>
        </div>

        <nav className="appnav">
          <ul className="appnav-links">
            <Link to='/dashboard'><li className="appnav-li">Dashboard</li></Link>
            <li className="appnav-li" id="dropdown-li">
              <div className="dropdown">
                <button className="dropbtn">TV Show Status</button>
                <div className="dropdown-content">
                  <Link to='/plan-to-watch' className="dropdown-link"><span className="dropdown-span">Plan to Watch</span></Link>
                  <Link to='/currently-watching'><span className="dropdown-span">Currently Watching</span></Link>
                  <Link to='/completed'><span className="dropdown-span">Completed</span></Link>
                </div>
              </div>
            </li>
            <Link to='/add-entry'><li className="appnav-li">Add New Show</li></Link>
            <Link to='/'>
              <li className="appnav-li">
                <button type="button" className="logout-button"
                  onClick={() => {this.handleLogoutClick(); this.context.toggleIsLoggedOff()}}>
                  Logout
                </button>
              </li>
            </Link>
          </ul>
        </nav>

        <div className="hamburger">
            <label htmlFor="toggle" className="hamburger-logo">&#9776;</label>
            <input type="checkbox" id="toggle"/>
            <ul className="menu">
                <Link to='/dashboard'><li className="appnav-li appnav-li-first">Dashboard</li></Link>
                <Link to='/plan-to-watch'><li className="appnav-li">Plan to Watch</li></Link>
                <Link to='/currently-watching'><li className="appnav-li">Currently Watching</li></Link>
                <Link to='/completed'><li className="appnav-li">Completed</li></Link>
                <Link to='/add-entry'><li className="appnav-li">Add New Show</li></Link>
                <Link to='/'>
                  <li className="appnav-li" 
                    onClick={() => {this.handleLogoutClick(); this.context.toggleIsLoggedOff()}}>
                    Logout
                  </li>
                </Link>
            </ul>
        </div>
        
      </header>
    )
  }
}