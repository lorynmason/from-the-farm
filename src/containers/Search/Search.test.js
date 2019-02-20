import React from 'react';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';
import { shallow } from 'enzyme';
import { addProducts } from '../../actions';
import { searchVendors } from '../../thunks/searchVendors';

jest.mock('../../thunks/searchVendors.js');

describe('Search', () => {
  let items = [{name: "Berries",
  id: 1}, {name: "Eggs",
  id: 11}]
  let wrapper = shallow(<Search items={items} products={[]} addProductsToStore={jest.fn()} searchVendors={jest.fn()} addMessage={jest.fn()} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update state when changes are made to form elements', () => {
      expect(wrapper.state()).toEqual({
        productId: '',
        location: '',
        range: ''
      });

      wrapper.find('.search-form').simulate('change', {'target': {name: 'productId', value: '1'}});
      wrapper.find('.search-form').simulate('change', {'target': {name: 'location', value: '80219'}});
      wrapper.find('.search-form').simulate('change', {'target': {name: 'range', value: '50'}});

      expect(wrapper.state()).toEqual({
        productId: '1',
        location: '80219',
        range: '50'
      });
    });
  });

  describe('handleSubmit', () => {
    it('should call search with the correct params on submit', () => {
      wrapper.setProps({searchVendors: jest.fn()});

      const { searchVendors } = wrapper.instance().props
      wrapper.find('.search-form').simulate('submit', {preventDefault: ()=> jest.fn()});

      expect(searchVendors).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of products', () => {
      const mockGlobalState = {
        vendors: [{id: 1, name: 'Farm Team'}],
        products: [{name: 'carrots', quantity: 'all'}],
        user: {name: 'Mike'}
      }

      const expected = [{name: 'carrots', quantity: 'all'}];

      const mappedProps = mapStateToProps(mockGlobalState);
      expect(mappedProps.products).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    it('should dispatch addProducts with the correct params when addProductsToStore is called', () => {
      const mockProducts = [{name: 'carrots', quantity: 'all'}];
      const expected = addProducts(mockProducts);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addProductsToStore(mockProducts);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});