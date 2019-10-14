import React, { Component } from 'react'

export default class PlanToWatch extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Plan to Watch</h1>
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
        <section>
          <h2>Stranger Things (Expanded View)</h2>
          <ul>
            <p>Season No. 3</p>
            <p>Episode No. 7</p>
            <p>Genre: Action/Thriller</p>
            <p>Rating: 5 stars</p>
            <p>Description: A group of ordinary kids have their lives turned upside down once they encounter the supernatural...</p>
            <p>Review: This is one of my favorite shows! It's super suspenseful and has a great story.</p>
          </ul>
          <button>Edit</button>
          <button>Delete</button>
      </section>
      <section>
        <h2>Keeping Up With the Kardashians (Collapsed View)</h2>
        <p>Season No. 1</p>
        <p>Episode No. 3</p>
        <p>Rating: 2 stars</p>
        <button>Edit</button>
        <button>Delete</button>
      </section>
      <section>
        <button>Add New TV Show</button>
      </section>
    </div>
    )
  }
}
