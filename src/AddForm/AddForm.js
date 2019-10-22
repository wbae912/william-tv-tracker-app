import React, { Component } from 'react';
import tvContext from '../Context';
import FormError from '../FormError/FormError';
import './AddForm.css';

export default class AddForm extends Component {
  static contextType = tvContext;

  constructor(props) {
    super(props)
  
    this.state = {
       tv_title: '',
       status: '',
       titleTouch: {
        touched: false
      },
      statusTouch: {
        touched: false
      },
    }
  }

  handleChange = e => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleTitleTouch = (e) => {
    this.setState({
      titleTouch: {touched: true}
    })
  }

  handleStatusTouch = (e) => {
    this.setState({
      statusTouch: {touched: true}
    })
  }
  
  componentDidMount() {
    this.context.getAllShows();
  }
  
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

  validateTitle = () => {
    const title = this.state.tv_title;
    if(title.length === 0) {
      return 'Please enter a TV show name';
    }
  }

  validateStatus = () => {
    const status = this.state.status;
    if(parseInt(status) === 0) {
      return 'Please enter a status';
    }
  }

  render() {
    let titleError = this.validateTitle();
    let statusError = this.validateStatus();

    return (
      <div className="add-form-div">
        <h1 className="add-form-title">Add a TV Show</h1>
        <section className="add-show-section">
          <form className="add-show-form" onSubmit={e => {
            this.submitForm(e);
            this.props.history.push('/dashboard');
            }}>
            <div className="form-section">
              <label htmlFor="tv_title" className="add-form-label">TV Show Name<span className="required">*</span></label>
              <input type="text" name="tv_title" id="tv_title" className="add-form-input" required 
                onChange={e => {this.handleChange(e); this.handleTitleTouch(e)}}
              />
              {this.state.titleTouch.touched && <FormError message={titleError} />}
            </div>
            <div className="form-section">
              <label htmlFor="status" className="add-form-label">Status<span className="required">*</span></label>
              <select name="status" id="status" className="add-form-select" required
                onChange={e => {this.handleChange(e); this.handleStatusTouch(e)}}
              >
                <option value="Planning to Watch">Plan to Watch</option>
                <option value="Currently Watching">Currently Watching</option>
                <option value="Completed">Completed</option>
              </select>
              {this.state.statusTouch.touched && <FormError message={statusError} />}
            </div>
            <div className="form-section">
                <label htmlFor="season_number" className="add-form-label">Season No.</label>
                <input type="number" name="season_number" id="season_number" min="1" className="add-form-input" placeholder="1"/>
            </div>
            <div className="form-section">
                <label htmlFor="episode_number" className="add-form-label">Episode No.</label>
                <input type="number" name="episode_number" id="episode_number" min="1" className="add-form-input" placeholder="1"/>
            </div>
            <div className="form-section">
                <label htmlFor="rating" className="add-form-label">Rating</label>
                <select name="rating" id="rating" className="add-form-select">
                  <option value="">Select a Rating...</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div className="form-section">
                  <label htmlFor="genre" className="add-form-label">Genre</label>
                  <select name="genre" id="genre" className="add-form-select">
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
                  <label htmlFor="description" className="add-form-label">Description</label>
                  <textarea type="text" name="description" id="description" className="add-form-input" />
              </div>
              <div className="form-section-last">
                    <label htmlFor="review" className="add-form-label">Review</label>
                    <textarea type="text" name="review" id="review" className="add-form-input" />
              </div>
              <p className="required-p"><span className="required">*</span>Required Fields</p>
              <div className="form-buttons-div">
                <button type="submit" className="add-show-button" disabled={titleError || statusError}>Submit</button>
                <button type="button" className="dashboard-button" 
                  onClick={() => this.props.history.goBack()}>
                  Back</button>
              </div>
          </form>
        </section>
      </div>
    )
  }
}