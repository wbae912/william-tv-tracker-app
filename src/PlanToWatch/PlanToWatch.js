import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';

export default class PlanToWatch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       planningShows: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/shows/planning`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong')
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          planningShows: data
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
          <h1>Plan to Watch</h1>
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
       

        {this.state.planningShows.map(show => 
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