import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';

export default class CurrentlyWatching extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       watchingShows: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/shows/watching`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          watchingShows: data
        })
      })
      .catch(error => {
        alert(`Error: ${error.message}`)
      })
  }
  
  render() {
    return (
      <div>
        <header role="banner">
          <h1>CurrentlyWatching</h1>
         <br/>

          <label>Search TV Show</label>
          <input type="text"/>
          <button>Search</button>
          <select name="list-options" id="list-options">
              <option value="0">Filter By</option>
              <option value="1">Genre</option>
              <option value="1">Rating</option>
          </select>
          <select name="list-options" id="list-options">
              <option value="0">Sort By</option>
              <option value="1">Name</option>
              <option value="1">Rating</option>
          </select>
        </header>

        {this.state.watchingShows.map(show => 
          <TvShowEntry
            key={show.id}
            show={show}
          />)}

        <section>
          <button>Add New TV Show</button>
        </section>
      </div>
    )
  }
}
