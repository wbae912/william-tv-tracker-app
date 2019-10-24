import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import FormError from './FormError';

describe(`FormError component`, () => {
  const message = 'Error message';
  
  it('renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <FormError message={message}/>
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders a .FormError by default', () => {
    const wrapper = shallow(<FormError message={message}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})