import React from 'react';
import Product from './Product';
import { shallow } from 'enzyme'

describe('Product', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Product product={{
      name: 'chile pepper',
      description: 'Pueblo hot roasted',
      price: 20.00,
      quantity: 1,
      unit: 'bushel'
    }} />)
    expect(wrapper).toMatchSnapshot()
  });
})
