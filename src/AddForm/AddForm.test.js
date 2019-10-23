import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddForm from './AddForm';
import renderer from 'react-test-renderer';

describe(`AddForm component`, () => {
  it('renders form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddForm />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<AddForm />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
});