import React, { Component } from 'react';
import tvContext from '../Context';
import RatingChart from '../RatingChart/RatingChart';
import GenreChart from '../GenreChart/GenreChart';
import StatusChart from '../StatusChart/StatusChart';
import Chart from 'chart.js';
import './Dashboard.css'

//Global styling for charts
Chart.defaults.global.legend.display = false;

export default class Dashboard extends Component {
  static contextType = tvContext;

  componentDidMount() {
    this.context.getAllShows();
  }

  render() {
    const totalShows = this.context.shows.length; 

    return (
      <section className="dashboard-section">
        <h1 className="dashboard-title">My Dashboard</h1>
        <h2 className="total-shows">Total TV Shows: {totalShows}</h2>
        <div className="chart-div">
          <h3 className="chart-title">TV Shows per Status</h3>
          <hr className="underline-mini" />
          <div className="chart">
            <StatusChart />
          </div>
        </div>
        <div className="chart-div">
          <h3 className="chart-title">TV Shows per Rating</h3>
          <hr className="underline-mini" />
          <div className="chart">
            <RatingChart />
          </div>
        </div>
        <div className="chart-div">
          <h3 className="chart-title">TV Shows per Genre</h3>
          <hr className="underline-mini" />
          <div className="chart">
            <GenreChart />
          </div>
        </div>
      </section>
    )
  }
}