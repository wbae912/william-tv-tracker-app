import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorBoundary from './ErrorBoundary';

describe(`ErrorBoundary component`, () => {
  const error = true;
  
  it('renders a .ErrorBoundary by default', () => {
    const wrapper = shallow(<ErrorBoundary error={error}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})