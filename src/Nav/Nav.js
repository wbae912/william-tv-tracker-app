import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <NavLink to='/login' activeClassName="selected"><li className="nav-li">Login</li></NavLink>
            <NavLink to='/register' activeClassName="selected"><li className="nav-li register-li">Register</li></NavLink>
          </ul>
        </nav>
      </header>
    )
  }
}