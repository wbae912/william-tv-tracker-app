import React from 'react';

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
      res.json();
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
        <h2 className="section-h2">Start Today!</h2>
        <form className="register-form" onSubmit={e => this.handleSubmit(e)}>
          <div className="register-form-div">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" id="full_name" name="full_name" placeholder="Bob Smith" onChange={e => this.handleChange(e)}/>
          </div>
          <div className="register-form-div">
            <label htmlFor="user_name">Username</label>
            <input type="text" id="user_name" name="user_name" placeholder="username" required onChange={e => this.handleChange(e)}/>
          </div>
          <div className="register-form-div">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" minLength="8" maxLength="72" required onChange={e => this.handleChange(e)}/>
          </div>
          <button type="submit" className="register-button">Sign Up</button>
        </form>
      </section>
    )
  }
}