import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/"><h2 className="nav-app-title">TV Tracker</h2></Link>
      </header>
    )
  }
}