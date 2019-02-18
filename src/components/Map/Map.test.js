import React from 'react';
import { Map } from './Map';
import { shallow, mount } from 'enzyme';
import { createBrowserHistory } from 'history';

let mockHistory = jest.mock('history');

describe('Map', () => {
  it.skip('should match snapshot', () => {
    let wrapper = shallow(<Map coordinates="[40, -140]" history={{listen: jest.fn()}} />)
    console.log(wrapper.instance().props)
    wrapper.setProps({history: {listen: jest.fn()}});
    expect(wrapper).toMatchSnapshot()
  });
});

// known issues with testing Leaflet with React exist. Will continue to research solutions