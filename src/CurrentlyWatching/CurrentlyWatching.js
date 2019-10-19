import React, { Component } from 'react';
import TvShowEntry from '../TvShowEntry/TvShowEntry';
import tvContext from '../Context';
import './CurrentlyWatching.css';

export default class CurrentlyWatching extends Component {
  static contextType = tvContext;

  constructor(props) {
    super(props)
  
    this.state = {
       searchTerm: '',
       genre: '',
       minRating: '',
       sort: ''
    }
  }

  componentDidMount() {
    this.context.getAllShows();
  }

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
    let currentlyWatchingShows = this.context.shows.filter(show => show.status === 'Currently Watching');

    if(this.state.searchTerm) {
      currentlyWatchingShows = currentlyWatchingShows.filter(show => show.tv_title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1);
    }
    if(this.state.genre) {
      currentlyWatchingShows = currentlyWatchingShows.filter(show => show.genre === this.state.genre);
    }
    if(this.state.minRating) {
      currentlyWatchingShows = currentlyWatchingShows.filter(show => show.rating >= this.state.minRating);
    }
    if(this.state.sort === '1') {
      currentlyWatchingShows = currentlyWatchingShows.sort((a,b) => (a.tv_title > b.tv_title) ? 1 : ((b.tv_title > a.tv_title) ? -1 : 0))
    }
    if(this.state.sort === '2') {
      currentlyWatchingShows = currentlyWatchingShows.sort((a,b) => (b.tv_title > a.tv_title) ? 1 : ((a.tv_title > b.tv_title) ? -1 : 0))
    }
    if(this.state.sort === '3') {
      currentlyWatchingShows = currentlyWatchingShows.sort((a,b) => a.rating - b.rating)
    }
    if(this.state.sort === '4') {
      currentlyWatchingShows = currentlyWatchingShows.sort((a,b) => b.rating - a.rating)
    }
    return (
      <div className="currently-section">
        <section className="tv-queries">
          <h1 className="current-h1">Currently Watching</h1>
          <div className="search-div">
            <label htmlFor="searchTerm" className="search-label">Search TV Show</label>
            <input type="text" name="searchTerm" id="searchTerm" placeholder="Search TV Show"
              value={this.state.searchTerm} 
              onChange={this.handleSearchTermChange} />
          </div>
          <div className="filter-genre">
            <select name="genre-options" id="genre-options" onChange={this.handleGenreChange}>
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
          </div>
          <div className="filter-rating">
            <select name="rating-options" id="rating-options" onChange={this.handleMinRatingChange}>
              <option value="">Filter By Min. Rating...</option>
              <option value="0">No Rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <div className="sort-div">
            <select name="sort-options" id="sort-options" onChange={this.handleSortChange}>
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
          </div>
        </section>

        {currentlyWatchingShows.map(show => 
          <TvShowEntry
            key={show.id}
            show={show}
            history={this.props.history}
          />)}

      </div>
    )
  }
}
