import React, { Component } from 'react';
import tvContext from '../Context';

export default class TvShowEntry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       touched: false
    }
  }
  
  toggleTouched = (e) => {
    this.setState({
      touched: !this.state.touched
    })
  }
  
  static contextType = tvContext;

  render() {
    return (
      <div className="tv-show-entry" onClick={e => this.toggleTouched(e)}>
        <h2>{this.props.show.tv_title}</h2>
        <div className="entry-p">
          <p>Season: {this.props.show.season_number}</p>
          <p>Episode: {this.props.show.episode_number}</p>
          <p>Genre: {this.props.show.genre}</p>
          <p>Rating: {this.props.show.rating}</p>
        </div>

        {this.state.touched
          ? (
            <div className="touched-p">
              <p>Description: {this.props.show.description}</p>
              <p>Review: {this.props.show.review}</p>
             </div>
            )
          : null
        }

        <div className="entry-buttons">
          <button type="button" id="edit-button" onClick={() => this.props.history.push(`/edit-entry/${this.props.show.id}`)}>Edit</button>
          <button type="button" id="delete-button" onClick={() => this.context.deleteTvShow(this.props.show.id)}>Delete</button>
        </div>
      </div>
    )
  }
}


// <div className="tv-show-entry">
//   <h2>{this.props.show.tv_title}</h2>
//   <div className="entry-p">
//     <p>Season: {this.props.show.season_number}</p>
//     <p>Episode: {this.props.show.episode_number}</p> 
//     <p>Rating: {this.props.show.rating}</p>
//   </div>
//   <div className="entry-buttons">
//     <button type="button" id="edit-button" onClick={() => this.props.history.push(`/edit-entry/${this.props.show.id}`)}>Edit</button>
//     <button type="button" id="delete-button" onClick={() => this.context.deleteTvShow(this.props.show.id)}>Delete</button>
//   </div>
// </div>