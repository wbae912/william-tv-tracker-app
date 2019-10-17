import React, { Component } from 'react';
import tvContext from '../Context';

export default class AddForm extends Component {
  static contextType = tvContext;
  
  submitForm = (e) => {
    e.preventDefault();
    const newShow = {
      tv_title: e.target.tv_title.value,
      status: e.target.status.value,
      season_number: Number(e.target.season_number.value),
      episode_number: Number(e.target.episode_number.value),
      rating: e.target.rating.value,
      genre: e.target.genre.value,
      description: e.target.description.value,
      review: e.target.review.value,
      user_id: 1
    };
    this.context.addTvShow(newShow)
  }

  //NEED TO REVISE THIS FUNCTION
  resetFields = (e) => {
    e.target.tv_title.value='';
    e.target.status.value='';
    e.target.season_number.value='';
    e.target.episode_number.value='';
    e.target.rating.value='';
    e.target.genre.value='';
    e.target.description.value='';
    e.target.review.value='';
    e.target.user_id.value=1;
  }

  render() {
    return (
      <div>
        <h1>Add a TV Show</h1>
        <section className="add-show-section">
          <form className="add-show-form" onSubmit={e => {
            this.submitForm(e);
            this.props.history.push('/dashboard');
            }}>
            <div className="form-section">
              <label htmlFor="tv_title">TV Show Name</label>
              <input type="text" name="tv_title" id="tv_title" required/>
            </div>
            <div className="form-section">
              <label htmlFor="status">Status</label>
              <select name="status" id="status" required>
                <option value="0">Select a Status...</option>
                <option value="Planning to Watch">Plan to Watch</option>
                <option value="Currently Watching">Currently Watching</option>
                <option value="Completed">Completed</option>
              </select>
            <div className="form-section">
                <label htmlFor="season_number">Season No.</label>
                <input type="number" name="season_number" id="season_number" min="1" placeholder="1"/>
            </div>
          <div className="form-section">
              <label htmlFor="episode_number">Episode No.</label>
              <input type="number" name="episode_number" id="episode_number" min="1" placeholder="1"/>
          </div>
            </div>
            <div className="form-section">
                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating">
                  <option value="">Select a Rating...</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div className="form-section">
                  <label htmlFor="genre">Genre</label>
                  <select name="genre" id="genre">
                    <option value="N/A">Select a Genre...</option>
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
              <div className="form-section">
                  <label htmlFor="description">Description</label>
                  <textarea type="text" name="description" id="description" />
              </div>
              <div className="form-section">
                    <label htmlFor="review">Review</label>
                    <textarea type="text" name="review" id="review" />
              </div>
            <button type="submit" className="add-show-button">Submit</button>
            <button type="button" className="reset-fields-button">Reset</button>
            <button type="button" className="reset-fields-button" onClick={() => this.props.history.push('/dashboard')}>Back to Dashboard</button>
          </form>
        </section>
      </div>
    )
  }
}