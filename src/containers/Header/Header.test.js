import React from 'react';
import { Header, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme'

describe('header', () => {
  let mockFunc = jest.fn()
  it('should match snapshot', () => {
    let wrapper = shallow(<Header removeUser={mockFunc} addMessage={mockFunc} isLoading={mockFunc}/>)
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should dispatch removeUser, addMessage, isLoading with the correct params when addProductsToStore is called', () => {
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMessage('You are now signed-out');
      mappedProps.removeUser();
      mappedProps.isLoading(true)

      expect(mockDispatch).toHaveBeenCalledTimes(3);
    });
  });
});
