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

  constructor(props) {
    super(props)
  
    this.state = {
       error: null
    }
  }
  
  
  componentDidMount() {
    this.context.getAllShows()
    .catch(res => {
      this.setState({
        error: res.error
      })
    })
  }

  render() {
    const totalShows = this.context.shows.length; 

    return (
      <section className="dashboard-section"> 
        <div role="alert" className="error-bigger">
          {this.state.error && <p className='red-bigger'>{this.state.error}</p>}
        </div>
        <h1 className="dashboard-title">My Dashboard</h1>
        <h2 className="total-shows">Total TV Shows: {totalShows}</h2>
        <hr className="underline-mini" id="underline-total" />
        <div className="chart-flex">
          <div className="chart-div" id="chart-one">
            <h3 className="chart-title">TV Shows per Status</h3>
            <hr className="underline-mini" />
            <div className="chart">
              <StatusChart />
            </div>
          </div>
          <div className="chart-div" id="chart-two">
            <h3 className="chart-title">TV Shows per Rating</h3>
            <hr className="underline-mini" />
            <div className="chart">
              <RatingChart />
            </div>
          </div>
        </div>
        <div className="chart-div" id="chart-three">
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

//reset the error in more places