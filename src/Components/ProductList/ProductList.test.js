import React from 'react';
import ProductList from './ProductList';
import { shallow } from 'enzyme'

describe('ProductList', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<ProductList />)
    expect(wrapper).toMatchSnapshot()
  });
})