import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';
import tvContext from '../Context';

export default class PlanToWatch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       searchTerm: '',
       genre: '',
       minRating: '',
       sort: ''
    }
  }
  
  static contextType = tvContext;

  handleSearchTermChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleGenreChange = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  handleMinRatingChange = (e) => {
    this.setState({
      minRating: e.target.value
    })
  }

  handleSortChange = (e) => {
    this.setState({
      sort: e.target.value
    })
  }
  
  render() {
    let planningToWatchShows = this.context.shows.filter(show => show.status === 'Planning to Watch');

    if(this.state.searchTerm) {
      planningToWatchShows = planningToWatchShows.filter(show => show.tv_title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1);
    }
    if(this.state.genre) {
      planningToWatchShows = planningToWatchShows.filter(show => show.genre === this.state.genre);
    }
    if(this.state.minRating) {
      planningToWatchShows = planningToWatchShows.filter(show => show.rating >= this.state.minRating);
    }
    if(this.state.sort === '1') {
      planningToWatchShows = planningToWatchShows.sort((a,b) => (a.tv_title > b.tv_title) ? 1 : ((b.tv_title > a.tv_title) ? -1 : 0))
    }
    if(this.state.sort === '2') {
      planningToWatchShows = planningToWatchShows.sort((a,b) => (b.tv_title > a.tv_title) ? 1 : ((a.tv_title > b.tv_title) ? -1 : 0))
    }
    if(this.state.sort === '3') {
      planningToWatchShows = planningToWatchShows.sort((a,b) => a.rating - b.rating)
    }
    if(this.state.sort === '4') {
      planningToWatchShows = planningToWatchShows.sort((a,b) => b.rating - a.rating)
    }
    console.log(this.state.sort);
    return (
      <div>
        <section className="tv-queries">
          <h1>Plan to Watch</h1>
         <br/>
          <label htmlFor="searchTerm">Search TV Show</label>
          <input type="text" name="searchTerm" id="searchTerm" value={this.state.searchTerm} onChange={this.handleSearchTermChange} placeholder="Search TV Show"/>
          <button type="button">Search</button>
          <select name="list-options" id="list-options" onChange={this.handleGenreChange}>
            <option value="">Filter By Genre...</option>
            <option value="N/A">N/A</option>
            <option value="Action">Action</option>
            <option value="Animated">Animated</option>
            <option value="Comedy">Comedy</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Educational">Educational</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Horror</option>
            <option value="Reality">Reality</option>
            <option value="Sitcom">Sitcom</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Variety">Variety</option>
          </select>
          <select name="list-options" id="list-options" onChange={this.handleMinRatingChange}>
            <option value="">Filter By Rating...</option>
            <option value="0">No Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
          <select name="list-options" id="list-options" onChange={this.handleSortChange}>
              <option value="0">Sort By...</option>
              <optgroup label="TV Show Name">
                <option value="1">Name (A-Z)</option>
                <option value="2">Name (Z-A)</option>
              </optgroup>
              <optgroup label="Rating">
                <option value="3">Rating (Low to High)</option>
                <option value="4">Rating (High to Low)</option>
              </optgroup>
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