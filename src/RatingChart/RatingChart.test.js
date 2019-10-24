import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Context from '../Context';
import RatingChart from './RatingChart';

describe(`RatingChart component`, () => {
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
  
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Context.Provider value={{shows}}><RatingChart /></Context.Provider>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders a .RatingChart by default', () => {
    const wrapper = shallow(<Context.Provider value={{shows}}><RatingChart /></Context.Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})