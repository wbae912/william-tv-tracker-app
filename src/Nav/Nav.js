import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <header className="nav-header">
        <div className="nav-logo-header">
          <div className="logo-div">
            <Link to='/'><i className="fa fa-tv fa-2x"></i></Link>
          </div>
          <Link to='/'><h2 className="nav-title">TV Tracker</h2></Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <Link to='/login'><li className="nav-li">Login</li></Link>
            <Link to='/register'><li className="nav-li register-li">Register</li></Link>
          </ul>
        </nav>
      </header>
    )
  }
}