import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import tvContext from '../Context';

export default class RatingChart extends Component {
  static contextType = tvContext;

  render() {
    const countFiveStars = this.context.shows.filter(show => show.rating === 5).length;
    const countFourStars = this.context.shows.filter(show => show.rating === 4).length;
    const countThreeStars = this.context.shows.filter(show => show.rating === 3).length;
    const countTwoStars = this.context.shows.filter(show => show.rating === 2).length;
    const countOneStar = this.context.shows.filter(show => show.rating === 1).length;
    const notRated = this.context.shows.filter(show => show.rating === 0).length;  
    const data = {
    labels: ['Not Rated', 'One Star', 'Two Stars', 'Three Stars', 'Four Stars', 'Five Stars'],
    datasets: [
      {
        label: 'TV Shows per Rating',
        backgroundColor: 'rgba(59, 45, 255, 0.2)',
        borderColor: 'rgba(59, 45, 255, 0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [notRated, countOneStar, countTwoStars, countThreeStars, countFourStars, countFiveStars]
      }
    ]
  };
    return (
      <div style={{width: '50%'}}>
        <HorizontalBar 
          data={data}
          height={300}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                  ticks: { display: true, stepSize: 1, beginAtZero: true, min: 0 },
                  gridLines: {
                      display: true,
                      drawBorder: true
                  }
              }],
              yAxes: [{
                  ticks: { display: true },
                  gridLines: {
                      display: false,
                      drawBorder: true
                  }
              }]
          }
          }}
        />
      </div>
    )
  }
}