import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard-section">
        <h1 className="dashboard-title">My TV Shows</h1>
        <p>Will include a pie chart of TOTAL TV shows split by CATEGORY</p>
        <p>Will include a bar graph that will show COUNT of TV shows by RATING</p>
        <p>Will include a bar graph that will show COUNT of TV shows by GENRE</p>
      </section>
    )
  }
}