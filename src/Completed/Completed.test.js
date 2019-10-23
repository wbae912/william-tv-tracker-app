import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Completed from './Completed';
import Context from '../Context';

describe(`Completed component`, () => {
  const shows = [
      {
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
  it('renders a .Completed by default', () => {
    const wrapper = shallow(<Context.Provider value={{shows}}><Completed /></Context.Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Show in section for each notes in array', () => {
    const section = shallow(<Completed {...props} />)
      .find('secion')
    expect(toJson(section)).toMatchSnapshot()
  })
})