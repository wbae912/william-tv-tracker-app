import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import tvContext from '../Context';

export default class StatusChart extends Component {
  static contextType = tvContext;
  render() {
    const countPlanningToWatch = this.context.shows.filter(show => show.status === 'Planning to Watch').length;
    const countCurrentlyWatching = this.context.shows.filter(show => show.status === 'Currently Watching').length;
    const countCompleted = this.context.shows.filter(show => show.status === 'Completed').length;

    const data = {
      labels: [
        'Plan to Watch',
        'Currently Watching',
        'Completed'
      ],
      datasets: [{
        data: [countPlanningToWatch, countCurrentlyWatching, countCompleted],
        backgroundColor: [
        'rgba(59, 45, 255, 0.2)',
        'rgba(41, 32, 160, 0.836)',
        'rgba(13, 0, 253, 0.836)'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#FF6384',
        '#FF6384'
        ]
      }]
    };

    const legendOpts = {
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
    };

    return (
      <div style={{width: '50%'}}>
        <Doughnut 
          data={data} 
          legend={legendOpts}
          width={100}
          height={350}  
          options={{
            responsive: true,
            maintainAspectRatio: false
          }} 
          redraw 
        />
      </div>
    )
  }
}