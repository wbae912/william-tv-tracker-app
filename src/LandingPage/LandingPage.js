import React, { Component } from 'react';

export default class LandingPage extends Component {
  render() {
    return (
    <>
      <nav className="nav">
        <h2 className="nav-app-title">TV Tracker</h2>
        <div className="landing-page-links">
          <button type="button" className="login-button">Login</button>
          <button type="button" className="register-button">Register</button>
        </div>
      </nav>
      <main>
        <header className="header">
          <h1 className="app-title">TV Tracker</h1>
          <p className="app-title-headline">track and catalog your favorite TV shows...</p>
        </header>

        <hr className="underline"></hr>

        <section className="section-one">
          <h2 className="section-h2">Create Your TV Show Entries</h2>
          <p className="section-p">TV Tracker allows you to submit TV shows that you are planning to watch, currently watching, or completed! Did a friend tell 
            you about a good show to watch? Add it as an entry as a reminder to see later.</p>
        </section>

        <hr className="underline"></hr>

        <section className="section-two">
          <h2 className="section-h2">Keep track of your Shows</h2>
          <p className="section-p">TV Tracker keeps a record of your TV shows so you can always have them on hand. Are you having a hard 
            time remembering which episode you left off for that one show? Keep track of it within the app? Like seeing a list of all the 
            TV shows you've watched? Go through your list and recommend one to a friend!</p>
        </section>

        <hr className="underline"></hr>

        <section className="section-three">
          <h2 className="section-h2">View Your Dashboard</h2>
          <p className="section-p">TV Tracker provides a convenient dashboard that displays useful and easily digestible information for 
            you. Want to see how many TV shows you are currently watching? Curious about how many shows you rated 5 stars? Or, perhaps 
            you want to see what your favorite TV show genre is? The dashboard is there for you so it takes all the leg work out of having 
            to find out for yourself!</p>
        </section>

        <hr className="underline"></hr>

        <section className="register-section">
          <h2 className="section-h2">Start Today!</h2>
          <form className="register-form">
            <div className="register-form-div">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name"/>
            </div>
            <div className="register-form-div">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name"/>
            </div>
            <div className="register-form-div">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email@example.com"/>
            </div>
            <div className="register-form-div">
              <label htmlFor="password">Password</label>
              <input type="text" id="password"/>
            </div>
            <button type="submit" className="reigster-button">Sign Up</button>
          </form>
        </section>
      </main>
    </>
    )
  }
}