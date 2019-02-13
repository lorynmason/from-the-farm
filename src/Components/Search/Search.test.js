import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  it.skip('should match snapshot', () => {
    let wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot()
  });
})