//MAY DELETE THIS COMPONENT

import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
    <nav className="nav">
      <h2 className="nav-app-title">TV Tracker</h2>
      <div className="landing-page-links">
        <button type="button" className="login-button">Login</button>
        <button type="button" className="register-button">Register</button>
      </div>
    </nav>
    )
  }
}