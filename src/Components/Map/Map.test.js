import React from 'react';
import { Map } from './Map';
import { shallow, mount } from 'enzyme';

describe('Map', () => {
  it.skip('should match snapshot', () => {
    let wrapper = mount(<Map coordinates="[40, -140]" />)
    expect(wrapper).toMatchSnapshot()
  });
})

// known issues with testing Leaflet with React exist. Will continue to research solutions