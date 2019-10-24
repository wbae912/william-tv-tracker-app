import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import TvShowEntry from './TvShowEntry';

describe(`TvShowEntry component`, () => {
  const show = {
    "id": "1",
    "tv_title": "Example",
    "status": "Completed",
    "season_number": "1",
    "episode_number": "1",
    "rating": "3",
    "genre": "Action",
    "description": "Lorem ipsum",
    "review": "Lorem ipsum"
  };
  
  const rating = 1;
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <TvShowEntry show={show} rating={rating}/>
      </MemoryRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders a .TvShowEntry by default', () => {
    const wrapper = shallow(<TvShowEntry show={show} rating={rating}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})