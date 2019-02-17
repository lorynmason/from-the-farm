import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Search products={[]} />)
    expect(wrapper).toMatchSnapshot()
  });
})