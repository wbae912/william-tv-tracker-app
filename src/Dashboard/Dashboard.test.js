import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Dashboard from './Dashboard';
import Context from '../Context';
import TokenService from '../services/token-service';
import renderer from 'react-test-renderer';

describe(`Dashboard component`, () => {
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
  
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Context.Provider value={{getAllShows, shows}}><Dashboard /></Context.Provider>
      </MemoryRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders a .Dashboard by default', () => {
    const wrapper = shallow(<Context.Provider value={{getAllShows, shows}}><Dashboard /></Context.Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  // it('renders UI as expected', () => {
  //   const tree = renderer
  //     .create(<Context.Provider value={{getAllShows, shows}}><Dashboard /></Context.Provider>)
  //     .toJSON();
  //     expect(tree).toMatchSnapshot();
  // })
});