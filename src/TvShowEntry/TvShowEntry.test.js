import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import TvShowEntry from './TvShowEntry';

// describe(`Completed component`, () => {
//   const show = {
//     "id": "1",
//     "tv_title": "Example",
//     "status": "Completed",
//     "season_number": "1",
//     "episode_number": "1",
//     "rating": "3",
//     "genre": "Action",
//     "description": "Lorem ipsum",
//     "review": "Lorem ipsum"
//   };
  
//   it('renders component without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//       <MemoryRouter>
//         <TvShowEntry props={show}/>
//       </MemoryRouter>
//       , div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
//   it('renders UI as expected', () => {
//     const tree = renderer
//       .create(<MemoryRouter><TvShowEntry props={show}/></MemoryRouter>)
//       .toJSON();
//       expect(tree).toMatchSnapshot();
//   })
//   it('renders a .TvShowEntry by default', () => {
//     const wrapper = shallow(<TvShowEntry props={show}/>)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })