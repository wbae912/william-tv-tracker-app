//MAY DELETE THIS COMPONENT

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <>
        <header className="header">
          <Link to="/"><h2 className="nav-app-title">TV Tracker</h2></Link>
        </header>
        <div className="landing-page-links">
            <Link to='/login'><button type="button" className="login-button">Login</button></Link>
            <Link to='/register'><button type="button" className="register-button">Register</button></Link>
        </div>
      </>
    )
  }
}