import React, { Component } from 'react';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import tvContext from '../Context';
import FormError from '../FormError/FormError';
import './LoginForm.css';

export default class LoginForm extends Component {
  static contextType = tvContext;

  constructor(props) {
    super(props)
  
    this.state = {
       error: null,
       password: '',
       user_name: '',
       usernameTouch: {
        touched: false
       },
       passwordTouch: {
         touched: false
       }
    }
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUserNameTouch = (e) => {
    this.setState({
      usernameTouch: {touched: true}
    })
  }

  handlePasswordTouch = (e) => {
    this.setState({
      passwordTouch: {touched: true}
    })
  }
  
  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
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
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
    }

  validateUserName = () => {
    const username = this.state.user_name;
    if(username.length === 0) {
      return 'Please enter a username';
    }
  }

  validatePassword = () => {
    const password = this.state.password;
    const REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    if(password.length === 0) {
        return 'Please enter a password';
    } else if(password.length < 8 || password.length > 72) {
        return 'Password must be between 8 and 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX.test(password)) {
      return 'Password must contain at least one upper case, lower case, and number character';
    }
  }


  render() {
    let passwordError = this.validatePassword();
    let userNameError = this.validateUserName();

    return (
      <section className="login-section">
        <div role="alert" className="error-div">
            {this.state.error && <p className='red'>{this.state.error}</p>}
          </div>
        <h2 className="login-h2">Login</h2>
        <form className="login-form" onSubmit={(e) => this.handleSubmitJwtAuth(e)}>
          <div className="login__user_name">
            <label htmlFor="user_name" className="login-label">Username</label>
            <input type="text" name="user_name" id="user_name" className="login-input" required
              onChange={(e) => {this.handleInputChange(e); this.handleUserNameTouch(e)}}
            />
            {this.state.usernameTouch.touched && <FormError message={userNameError} />}
          </div>
          <div className="login__password">
            <label htmlFor="password" className="login-label">Password</label>
            <input type="password" name="password" id="password" minLength="8" maxLength="72" className="login-input" 
              autoComplete="on" required 
              onChange={(e) => {this.handleInputChange(e); this.handlePasswordTouch(e)}}
            />
            {this.state.passwordTouch.touched && <FormError message={passwordError} />}
          </div>
          <div className="buttons-flex">
            <div className="login-button-div">
              <button type="submit" className="form__login-button" disabled={userNameError || passwordError}>Login</button>
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