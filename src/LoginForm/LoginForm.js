import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user_name: '',
       password: ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      user_name: this.state.user_name,
      password: this.state.password
    }

    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if(!res.ok) {
        return Promise.reject('Something went wrong');
      }
      res.json();
    })
    .then(() => {
      this.props.history.push('/dashboard');
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
    })
  }

  render() {
    return (
      <form className="login-form" onSubmit={e => this.handleSubmit(e)}>
        <div className="login__user_name">
          <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required onChange={e => this.handleChange(e)} />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" minLength="8" maxLength="72" required onChange={e => this.handleChange(e)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    )
  }
}
