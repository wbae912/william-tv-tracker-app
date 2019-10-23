import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Context from '../Context';
import GenreChart from './GenreChart';

describe(`Completed component`, () => {
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
          data: [1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1]
        }
      ]
    };
  
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Context.Provider value={{shows}}><GenreChart /></Context.Provider>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it('renders UI as expected', () => {
  //   const tree = renderer
  //     .create(<BrowserRouter><Context.Provider value={{shows}}><GenreChart data={data}/></Context.Provider></BrowserRouter>)
  //     .toJSON();
  //     expect(tree).toMatchSnapshot();
  // })
  // it('renders a .GenreChart by default', () => {
  //   const wrapper = shallow(<Context.Provider value={{shows}}><GenreChart /></Context.Provider>)
  //   expect(toJson(wrapper)).toMatchSnapshot()
  // })
})