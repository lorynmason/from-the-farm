import React from 'react';
import { Mapp } from './Map';
import { shallow } from 'enzyme';
import { mockVendors } from '../../helpers/mockData'

describe('Map', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Mapp vendorSearchResults={[]} vendors={mockVendors}/>)
    expect(wrapper).toMatchSnapshot()
  });
  it('should match snapshot', () => {
    let wrapper = shallow(<Mapp vendorSearchResults={mockVendors} vendors={mockVendors}/>)
    expect(wrapper).toMatchSnapshot()
  });
});
