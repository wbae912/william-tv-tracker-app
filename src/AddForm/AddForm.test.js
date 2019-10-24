import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddForm from './AddForm';
import toJson from 'enzyme-to-json';
import TokenService from '../services/token-service';
import Context from '../Context';
import renderer from 'react-test-renderer';

describe(`AddForm component`, () => {
  const shows = [
      {
        "id": "1",
        "tv_title": "Example",
        "status": "Completed",
        "season_number": "1",
        "episode_number": "1",
        "rating": "3",
        "genre": "Action",
        "description": "Lorem ipsum",
        "review": "Lorem ipsum"
      },
      {
        "id": "2",
        "tv_title": "Example 2",
        "status": "Completed",
        "season_number": "1",
        "episode_number": "1",
        "rating": "3",
        "genre": "Action",
        "description": "Lorem ipsum",
        "review": "Lorem ipsum"
      }
    ];
  
  const getAllShows = () => {
    return fetch(`http://localhost:8000/api/shows/all`, {
      headers: {
      'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        shows: data,
        isLoggedIn: true
      })
    })
  }

  const addTvShow = (newShow) => {
    return fetch('http://localhost:8000/api/shows/all', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newShow)
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(err => Promise.reject(err));
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        shows: [...this.state.shows, data]
      })
    })
  }

  it('renders form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Context.Provider value={{shows, getAllShows, addTvShow}}><AddForm /></Context.Provider>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders an .AddForm by default', () => {
    const wrapper = shallow(<Context.Provider value={{shows, getAllShows, addTvShow}}><AddForm /></Context.Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders UI as expected', () => {
    const tree = renderer
      .create(<Context.Provider value={{shows, getAllShows, addTvShow}}><AddForm /></Context.Provider>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
});