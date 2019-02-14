import React from 'react';
import { Buy } from './Buy';
import { shallow } from 'enzyme'

describe('Buy', () => {
  it('should match snapshot', () => {
    const state = {
      vendors : [],
      products: []
    }
    let wrapper = shallow(<Buy appState={state}/>)
    expect(wrapper).toMatchSnapshot()
  });
})
