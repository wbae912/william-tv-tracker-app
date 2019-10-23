import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from './NotFoundPage';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';

describe('NotFoundPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><NotFoundPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders UI as expected', () => {
    const tree = renderer
      .create(<MemoryRouter><NotFoundPage /></MemoryRouter>)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
})