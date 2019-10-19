import React from 'react';
import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       full_name: '',
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
        return Promise.reject('Something went wrong');
      }
      return res.json();
    })
    .then(() => {
      this.props.history.push('/login')
    })
    .catch(error => {
      alert(`Error: ${error.message}`);
    })
  }

  render() {
    return (
      <section className="register-section">
        <h2 className="register-h2">Start Today!</h2>
        <form className="register-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="register-form-div">
            <label htmlFor="full_name" className="register-label">Full Name</label>
            <input type="text" className="register-input" id="full_name" name="full_name" placeholder="Bob Smith" required
              onChange={e => this.handleChange(e)}/>
          </div>
          <div className="register-form-div">
            <label htmlFor="user_name" className="register-label">Username</label>
            <input type="text" className="register-input" id="user_name" name="user_name" placeholder="username" required 
              onChange={e => this.handleChange(e)}/>
          </div>
          <div className="register-form-div">
            <label htmlFor="password" className="register-label">Password</label>
            <input type="password" className="register-input" id="password" name="password" minLength="8" maxLength="72" required 
              onChange={e => this.handleChange(e)}/>
          </div>
          <div className="buttons-flex">
            <div className="signup-button-div">
              <button type="submit" className="signup-button">Sign Up</button>
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