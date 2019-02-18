import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should call fetchVendors with the correct params', () => {

  });

  describe('search', () => {
    it('should return an error if there is no location', () => {

    });

    it('should call fetchVendors with a range of 50 if there is no range', () => {

    });

    it('should call fetch with a shorter path if there is no productId', () => {

    });

    it('should call filter products with the correct arguments', () => {

    });
  });

  describe('filterProducts', () => {
    it('should call addProductsToStore with the correct args if there is an id passed in', () => {

    });
  });

  describe('mapStateToProps', () => {
    it('should return a props object', () => {

    });
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch addUser with the correct args when addUserToStore is called', () => {

    });

    it('should dispatch fetchVendors thunk with the correct args when fetchVendors is called', () => {

    });

    it('should dispatch addProducts with the correct args when addProductsToStore is called', () => {

    });
  });
});
