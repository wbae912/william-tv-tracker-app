import React, { Component } from 'react';
import tvContext from '../Context';
import RatingChart from '../RatingChart/RatingChart';
import GenreChart from '../GenreChart/GenreChart';
import StatusChart from '../StatusChart/StatusChart';
import Chart from 'chart.js';
import './Dashboard.css'

//Global styling for charts
Chart.defaults.global.legend.display = false;
//End styling for charts

export default class Dashboard extends Component {
  static contextType = tvContext;

  componentDidMount() {
    this.context.getAllShows();
  }

  render() {
    const countPlanningToWatch = this.context.shows.filter(show => show.status === 'Planning to Watch').length;
    const countCurrentlyWatching = this.context.shows.filter(show => show.status === 'Currently Watching').length;
    const countCompleted = this.context.shows.filter(show => show.status === 'Completed').length;
    const totalShows = countPlanningToWatch + countCurrentlyWatching + countCompleted;

    return (
      <section className="dashboard-section">
        <h1 className="dashboard-title">My TV Shows</h1>
        <h2>Total Shows: {totalShows}</h2>
        <div className="pie-chart">
          <h2>TV Shows per Status</h2>
          <StatusChart />
        </div>
        <div className="rating-chart">
          <h2>TV Shows per Rating</h2>
          <RatingChart />
        </div>
        <div className="genre-chart">
          <h2>TV Shows per Genre</h2>
          <GenreChart />
        </div>
      </section>
    )
  }
}