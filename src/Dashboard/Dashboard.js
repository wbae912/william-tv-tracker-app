import React, { Component } from 'react';
import tvContext from '../Context';

export default class Dashboard extends Component {

  static contextType = tvContext;


  componentDidMount() {
    this.context.getAllShows();
  }

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

    return (
      <section className="dashboard-section">
        <h1 className="dashboard-title">My TV Shows</h1>
        <div className="pie-chart">
          <h2>SHOW STATUS PIE CHART</h2>
          <p>Plan to Watch: {countPlanningToWatch}</p>
          <p>Currently Watching: {countCurrentlyWatching}</p>
          <p>Completed: {countCompleted}</p>
          <p>Total # of Shows: {totalShows}</p>
        </div>
        <div className="rating-chart">
          <h2>RATING BAR CHART</h2>
          <p>5 stars: {countFiveStars}</p>
          <p>4 stars: {countFourStars}</p>
          <p>3 stars: {countThreeStars}</p>
          <p>2 stars: {countTwoStars}</p>
          <p>1 star: {countOneStar}</p>
          <p>Not Rated: {notRated}</p>
        </div>
        <div className="genre-chart">
          <h2>GENRE BAR CHART</h2>
          <p>No Genre: {noGenre}</p>
          <p>Action: {countAction}</p>
          <p>Animated: {countAnimated}</p>
          <p>Comedy: {countComedy}</p>
          <p>Documentary: {countDocumentary}</p>
          <p>Drama: {countDrama}</p>
          <p>Educational: {countEducational}</p>
          <p>Fantasy: {countFantasy}</p>
          <p>Horror: {countHorror}</p>
          <p>Mystery: {countMystery}</p>
          <p>Reality: {countReality}</p>
          <p>Sitcom: {countSitcom}</p>
          <p>Sci-Fi: {countSciFi}</p>
          <p>Thriller: {countThriller}</p>
          <p>Variety: {countVariety}</p>
        </div>
      </section>
    )
  }
}