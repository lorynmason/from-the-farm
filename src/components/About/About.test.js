import React from 'react';
import { About } from './About';
import { shallow } from 'enzyme';

describe('About', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<About />)
    expect(wrapper).toMatchSnapshot()
  });
})