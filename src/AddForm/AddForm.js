import React, { Component } from 'react'

export default class AddForm extends Component {
  render() {
    return (
      <div>
        <h1>Add a TV Show</h1>
        <section>
          <form>
            <div class="form-section">
              <label>TV Show Name</label>
              <input type="text" required />
            </div>
            <div class="form-section">
              <label>Category</label>
              <select name="list-options" id="list-options">
                <option value="0">Select a Category...</option>
                <option value="1">Plan to Watch</option>
                <option value="2">Currently Watching</option>
                <option value="3">Finished</option>
              </select>
            <div class="form-section">
                <label>Season No.</label>
                <input type="number" />
            </div>
          <div class="form-section">
              <label>Episode No.</label>
              <input type="number" />
          </div>
            </div>
            <div class="form-section">
                <label>Rating</label>
                <select name="list-options" id="list-options">
                  <option value="0">Select a Rating...</option>
                  <option value="1">1 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div class="form-section">
                  <label>Rating</label>
                  <select name="list-options" id="list-options">
                    <option value="0">Select a Genre...</option>
                    <option value="1">Action</option>
                    <option value="2">Comedy</option>
                    <option value="3">Drama</option>
                    <option value="4">Horror</option>
                    <option value="5">5 Thriller</option>
                  </select>
                </div>
              <div class="form-section">
                  <label>Description</label>
                  <input type="text" />
              </div>
              <div class="form-section">
                    <label>Review</label>
                    <input type="text" />
              </div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </form>
        </section>
      </div>
    )
  }
}