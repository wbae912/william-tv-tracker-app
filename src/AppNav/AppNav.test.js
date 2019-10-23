import React from 'react';
import ReactDOM from 'react-dom';
import AppNav from './AppNav';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

describe('AppNav component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><AppNav /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><AppNav /></MemoryRouter>)
        .toJSON();
        expect(tree).toMatchSnapshot();
  })
})