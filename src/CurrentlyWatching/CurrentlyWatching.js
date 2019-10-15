import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';
import tvContext from '../Context';

export default class CurrentlyWatching extends Component {
  static contextType = tvContext;
  
  render() {
    const currentlyWatchingShows = this.context.shows.filter(show => show.status === 'Currently Watching');
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

        {currentlyWatchingShows.map(show => 
          <TvShowEntry
            key={show.id}
            show={show}
            history={this.props.history}
          />)}

        <section>
          <button>Add New TV Show</button>
        </section>
      </div>
    )
  }
}
