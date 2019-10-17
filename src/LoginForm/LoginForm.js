import React, { Component } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import tvContext from '../Context';

export default class LoginForm extends Component {
  
  static contextType = tvContext;
  
  handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      // this.setState({ error: null })
      const { user_name, password } = ev.target

      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
      })
        .then(res => {
          user_name.value = '';
          password.value = '';
          TokenService.saveAuthToken(res.authToken);
          this.props.history.push('/dashboard')
          // window.location.reload(); //TEMPORARY FIX
        })
        .catch(error => {
          alert(`Error: ${error.message}`)
        })
    }

  render() {
    return (
      <form className="login-form" onSubmit={(e) => {this.handleSubmitJwtAuth(e); this.context.toggleIsLoggedIn();}}>
        <div className="login__user_name">
          <label htmlFor="user_name">Username</label>
          <input type="text" name="user_name" id="user_name" required />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" minLength="8" maxLength="72" required />
        </div>
        <button type="submit" className="login-button">Login</button>
        <button type="button" className="back-button" onClick={() => this.props.history.push('/')}>Back</button>
      </form>
    )
  }
}