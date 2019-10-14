import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AppNav extends Component {
  render() {
    return (
    <nav className="nav-app">
      <h2 className="nav-app-title">TV Tracker</h2>
      <div className="app-links">
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/plan-to-watch'>Plan to Watch</Link>
        <Link to='/currently-watching'>Currently Watching</Link>
        <Link to='/completed'>Completed</Link>
        <Link to='/add-entry'>Add New Show</Link>
        <button type="button">Logout</button>
      </div>
    </nav>
    )
  }
}