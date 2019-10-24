import React from 'react';
import FormError from '../FormError/FormError';
import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       error: null,
       full_name: '',
       user_name: '',
       password: '',
       fullNameTouch: {
         touched: false
       },
       userNameTouch: {
         touched: false
       },
       passwordTouch: {
        touched: false
      }
    }
  }
  
  handleChange = e => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleFullNameTouch = (e) => {
    this.setState({
      fullNameTouch: {touched: true}
    })
  }

  handleUserNameTouch = (e) => {
    this.setState({
      userNameTouch: {touched: true}
    })
  }

  handlePasswordTouch = (e) => {
    this.setState({
      passwordTouch: {touched: true}
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      full_name: this.state.full_name,
      user_name: this.state.user_name,
      password: this.state.password
    }

    fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(() => {
      this.props.history.push('/login')
    })
    .catch(res => {
      this.setState({
        error: res.error
      })
    })
  }

  validateFullName = () => {
    const fullName = this.state.full_name;
    if(fullName.length === 0) {
      return 'Please enter your full name';
    }
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
    let fullNameError = this.validateFullName();
    let passwordError = this.validatePassword();
    let userNameError = this.validateUserName();

    return (
      <section className="register-section">
        <div role="alert" className="error-div">
          {this.state.error && <p className='red'>{this.state.error}</p>}
        </div>
        <h2 className="register-h2">Start Today!</h2>
        <form className="register-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="register-form-div">
            <label htmlFor="full_name" className="register-label">Full Name</label>
            <input type="text" className="register-input" id="full_name" name="full_name" placeholder="Bob Smith" required
              aria-required="true" aria-label="Full name" aria-invalid="true"
              onChange={e => {this.handleChange(e); this.handleFullNameTouch(e)}}/>
          </div>
          {this.state.fullNameTouch.touched && <FormError message={fullNameError} />}
          <div className="register-form-div">
            <label htmlFor="user_name" className="register-label">Username</label>
            <input type="text" className="register-input" id="user_name" name="user_name" placeholder="username" required
              aria-required="true" aria-label="username" aria-invalid="true"
              onChange={e => {this.handleChange(e); this.handleUserNameTouch(e)}}/>
          </div>
          {this.state.userNameTouch.touched && <FormError message={userNameError} />}
          <div className="register-form-div">
            <label htmlFor="password" className="register-label">Password<span className="required">*</span></label>
            <input type="password" className="register-input" id="password" name="password" minLength="8" maxLength="72" required
              autoComplete="on" aria-required="true" aria-label="password" aria-invalid="true"
              onChange={e => {this.handleChange(e);this.handlePasswordTouch(e)}}/>
          </div>
          {this.state.passwordTouch.touched && <FormError message={passwordError} />}
          <p className="password-requirements"><span className="required">*</span>Password must contain at least one uppercase, lowercase, and number character</p>
          <div className="buttons-flex">
            <div className="signup-button-div">
              <button type="submit" className="signup-button" disabled={fullNameError || userNameError || passwordError}>Sign Up</button>
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