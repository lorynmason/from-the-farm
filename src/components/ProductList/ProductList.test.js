import React from 'react';
import ProductList from './ProductList';
import { shallow } from 'enzyme';

describe('ProductList', () => {
  it('should match snapshot with no products', () => {
    let wrapper = shallow(<ProductList products={[]} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot with products', () => {
    const mockProducts = [
      {name: 'carrots', id: 2},
      {name: 'lettuce', id: 5}
    ]
    let wrapper = shallow(<ProductList products={mockProducts} />);
    expect(wrapper).toMatchSnapshot();
  });
});