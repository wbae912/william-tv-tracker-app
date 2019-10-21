import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import tvContext from '../Context';

export default class GenreChart extends Component {
  static contextType = tvContext;

  render() {
    const noGenre = this.context.shows.filter(show => show.genre === 'N/A').length;
    const countAction = this.context.shows.filter(show => show.genre === 'Action').length;
    const countAnimated = this.context.shows.filter(show => show.genre === 'Animated').length;
    const countComedy = this.context.shows.filter(show => show.genre === 'Comedy').length;
    const countDocumentary = this.context.shows.filter(show => show.genre === 'Documentary').length;
    const countDrama = this.context.shows.filter(show => show.genre === 'Drama').length;
    const countEducational = this.context.shows.filter(show => show.genre === 'Educational').length;
    const countFantasy = this.context.shows.filter(show => show.genre === 'Fantasy').length;
    const countHorror = this.context.shows.filter(show => show.genre === 'Horror').length;
    const countMystery = this.context.shows.filter(show => show.genre === 'Mystery').length;
    const countReality = this.context.shows.filter(show => show.genre === 'Reality').length;
    const countSciFi = this.context.shows.filter(show => show.genre === 'Sci-Fi').length;
    const countSitcom = this.context.shows.filter(show => show.genre === 'Sitcom').length;
    const countThriller = this.context.shows.filter(show => show.genre === 'Thriller').length;
    const countVariety = this.context.shows.filter(show => show.genre === 'Variety').length;
    const data = {
      labels: [
        'N/A',
        'Action',
        'Animated',
        'Comedy',
        'Documentary',
        'Drama',
        'Educational',
        'Fantasy',
        'Horror',
        'Mystery',
        'Reality',
        'Sci-Fi',
        'Sitcom',
        'Thriller',
        'Variety',
      ],
      datasets: [
        {
          label: 'TV Shows per Genre',
          backgroundColor: 'rgba(59, 45, 255, 0.2)',
          borderColor: 'rgba(59, 45, 255, 0.2)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [noGenre, countAction, countAnimated, countComedy, countDocumentary, countDrama, countEducational, countFantasy,
            countHorror, countMystery, countReality, countSciFi, countSitcom, countThriller, countVariety]
        }
      ]
    };
    return (
      <div style={{width: '90%'}}>
        <Bar
          data={data}
          redraw
          width={100}
          height={250}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                  ticks: { display: true, fontColor: 'white' },
                  gridLines: {
                      display: false,
                      drawBorder: true
                  }
              }],
              yAxes: [{
                  ticks: { display: true, stepSize: 1, beginAtZero: true, min: 0, fontColor: 'white' },
                  gridLines: {
                      display: true,
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