import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { fetchVendors } from '../../thunks/fetchVendors';

jest.mock('../../thunks/fetchVendors.js');

describe('App', () => {
  let wrapper;
  let mockDispatch;
  beforeEach(() => {
    wrapper = shallow(<App fetchVendors={fetchVendors}/>);
    mockDispatch = jest.fn();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should call fetchVendors with the correct params', async () => {
    await wrapper.instance().componentDidMount();

    expect(fetchVendors).toHaveBeenCalledWith('https://xpoll-be.herokuapp.com/api/v1/vendors');
  });

  describe('mapStateToProps', () => {
    it('should return a props object', () => {
      const mockGlobalState = {
        vendors: [],
        products: [],
        user: {},
        isLoading: false,
        vendorSearchResults: [],
        productSearchResults: []
      }

      const expected = {
        vendors: [],
        products: [],
        user: {},
        isLoading: false
      }

      const mappedProps = mapStateToProps(mockGlobalState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch fetchVendors thunk with the correct args when fetchVendors is called', () => {
      const mockUrl = 'someplace.com';
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchVendors(mockUrl);
      expect(mockDispatch).toHaveBeenCalledWith(fetchVendors(mockUrl));
    }); 
  });
});
