import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';
import tvContext from '../Context';

export default class PlanToWatch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchTerm: '',
       genre: ''
    }
  }
  
  static contextType = tvContext;

  handleSearchTermChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  // componentDidMount() {
  //   const body = this.state.searchTerm;
  //   fetch('http://localhost:8000/api/shows/all/search', {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   })
  // }
  
  render() {
    const planningToWatchShows = this.context.shows.filter(show => show.status === 'Planning to Watch');
    return (
      <div>
        <section className="tv-queries">
          <h1>Plan to Watch</h1>
         <br/>
          <label htmlFor="searchTerm">Search TV Show</label>
          <input type="text" name="searchTerm" id="searchTerm" placeholder="Search TV Show"/>
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
        </section>

        {planningToWatchShows.map(show => 
          <TvShowEntry
            key={show.id}
            show={show}
            history={this.props.history}
          />)}

      </div>
    )
  }
}