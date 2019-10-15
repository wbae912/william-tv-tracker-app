import React, { Component } from 'react'

export default class TvShowEntry extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="tv-show-entry">
        <h2>{this.props.show.tv_title}</h2>
        <ul>
          <p>Season: {this.props.show.season_number}</p>
          <p>Episode: {this.props.show.episode_number}</p>
          <p>Genre: {this.props.show.genre}</p>
          <p>Rating: {this.props.show.rating}</p>
          <p>Description: {this.props.show.description}</p>
          <p>Review: {this.props.show.review}</p>
        </ul>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}