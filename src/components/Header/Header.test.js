import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme'

describe('header', () => {
  let mockFunc = jest.fn()
  it('should match snapshot', () => {
    let wrapper = shallow(<Header removeUser={mockFunc} addMessage={mockFunc} isLoading={mockFunc}/>)
    expect(wrapper).toMatchSnapshot()
  });
  
})
