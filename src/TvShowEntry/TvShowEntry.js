import React, { Component } from 'react';
import tvContext from '../Context';

export default class TvShowEntry extends Component {
  static contextType = tvContext;

  render() {
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
        <button type="button" id="edit-button" onClick={() => this.props.history.push(`/edit-entry/${this.props.show.id}`)}>Edit</button>
        <button type="button" id="delete-button" onClick={() => this.context.deleteTvShow(this.props.show.id)}>Delete</button>
      </div>
    )
  }
}