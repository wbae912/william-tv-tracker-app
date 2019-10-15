import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';
import tvContext from '../Context';

export default class Completed extends Component {
  static contextType = tvContext;

  render() {
    const completedShows = this.context.shows.filter(show => show.status === 'Completed');
    return (
      <div>
        <header role="banner">
          <h1>Completed</h1>
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

        {completedShows.map(show =>
          <TvShowEntry 
            key={show.id}
            show={show}
          />
        )}

        <section>
          <button>Add New TV Show</button>
        </section>
      </div>
    )
  }
}
