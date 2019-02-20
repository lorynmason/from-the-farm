import React from 'react';
import Map from './Map';
import { shallow } from 'enzyme';

describe('Map', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<Map />)
    expect(wrapper).toMatchSnapshot()
  });
});
