import React from 'react';
import { Buy } from './Buy';
import { shallow } from 'enzyme'

describe('Buy', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Buy />)
    expect(wrapper).toMatchSnapshot()
  });
})
