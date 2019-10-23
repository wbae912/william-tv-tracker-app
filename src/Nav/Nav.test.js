import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

describe.only('Nav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><Nav /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter><Nav /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
})