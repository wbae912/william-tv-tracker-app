import React, { Component } from 'react'
import tvContext from '../Context';

export default class Dashboard extends Component {
  static contextType = tvContext;


  render() {
    //PIE CHART NUMBERS
    const countPlanningToWatch = this.context.shows.filter(show => show.status === 'Planning to Watch').length;
    const countCurrentlyWatching = this.context.shows.filter(show => show.status === 'Currently Watching').length;
    const countCompleted = this.context.shows.filter(show => show.status === 'Completed').length;
    const totalShows = countPlanningToWatch + countCurrentlyWatching + countCompleted;

    //RATING CHART NUMBERS
    const countFiveStars = this.context.shows.filter(show => show.rating === 5).length;
    const countFourStars = this.context.shows.filter(show => show.rating === 4).length;
    const countThreeStars = this.context.shows.filter(show => show.rating === 3).length;
    const countTwoStars = this.context.shows.filter(show => show.rating === 2).length;
    const countOneStar = this.context.shows.filter(show => show.rating === 1).length;
    const notRated = this.context.shows.filter(show => show.rating === 0).length;
    //GENRE CHART NUMBERS
    // action
    // animated
    // comedy
    // documentary
    // drama
    // educational
    // fantasy
    // horror
    // reality
    // sci-fi
    // thriller
    // variety
    return (
      <section className="dashboard-section">
        <h1 className="dashboard-title">My TV Shows</h1>
        <div className="pie-chart">
          <p>Plan to Watch: {countPlanningToWatch}</p>
          <p>Currently Watching: {countCurrentlyWatching}</p>
          <p>Completed: {countCompleted}</p>
          <p>Total # of Shows: {totalShows}</p>
        </div>
        <div className="rating-chart">
          <p>5 stars: {countFiveStars}</p>
          <p>4 stars: {countFourStars}</p>
          <p>3 stars: {countThreeStars}</p>
          <p>2 stars: {countTwoStars}</p>
          <p>1 star: {countOneStar}</p>
          <p>Not Rated: {notRated}</p>
        </div>
        <div className="genre-chart">

        </div>
      </section>
    )
  }
}