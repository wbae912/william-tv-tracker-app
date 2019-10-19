import React, { Component } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import tvContext from '../Context';
import './LoginForm.css';

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
        })
        .catch(error => {
          alert(`Error: ${error.message}`)
        })
    }

  render() {
    return (
      <section className="login-section">
        <h2 className="login-h2">Login</h2>
        <form className="login-form" onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
          <div className="login__user_name">
            <label htmlFor="user_name" className="login-label">Username</label>
            <input type="text" name="user_name" id="user_name" className="login-input" required/>
          </div>
          <div className="login__password">
            <label htmlFor="password" className="login-label">Password</label>
            <input type="password" name="password" id="password" minLength="8" maxLength="72" className="login-input" required />
          </div>
          <div className="buttons-flex">
            <div className="login-button-div">
              <button type="submit" className="form__login-button">Login</button>
            </div>
            <div className="back-button-div">
              <button type="button" className="back-button" onClick={() => this.props.history.push('/')}>Back</button>
            </div>
          </div>
        </form>
      </section>
    )
  }
}