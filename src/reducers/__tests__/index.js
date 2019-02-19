import { rootReducer } from '../index';
import { createStore } from 'redux';
import { userReducer } from '../userReducer';
import { isLoadingReducer } from '../isLoadingReducer';
import { hasErroredReducer } from '../hasErroredReducer';
import { vendorReducer } from '../vendorReducer';
import { productsReducer } from '../productsReducer';
import { messageReducer } from '../messageReducer';
import { itemsReducer } from '../itemsReducer';
import * as Search from '../searchResultsReducer';

describe('rootReducer', () => {
  let store = createStore(rootReducer);
  it('should add default state of vendors to the store when vendorReducer handles an action', () => {
    const expected = vendorReducer([], {type: ''});
    const results = store.getState().vendors;
    expect(results).toEqual(expected);
  });
  
  it('should add default state of products to the store when productsReducer handles an action', () => {
    const expected = productsReducer([], {type: ''});
    const results = store.getState().products;
    expect(results).toEqual(expected);
  });

  it('should add default state of user to the store when userReducer handles an action', () => {
    const expected = userReducer({}, {type: ''});
    const results = store.getState().user;
    expect(results).toEqual(expected);
  });

  it('should add default state of error to the store when hasErroredReducer handles an action', () => {
    const expected = hasErroredReducer('', {type: ''});
    const results = store.getState().hasErrored;
    expect(results).toEqual(expected);
  });

  it('should add default state of message to the store when messageReducer handles an action', () => {
    const expected = messageReducer('', {type: ''});
    const results = store.getState().message;
    expect(results).toEqual(expected);
  });

  it('should add default state of isLoading to the store when isLoadingReducer handles an action', () => {
    const expected = isLoadingReducer(false, {type: ''});
    const results = store.getState().isLoading;
    expect(results).toEqual(expected);
  });

  it('should add default state of items to the store when itemsReducer handles an action', () => {
    const expected = itemsReducer([], {type: ''});
    const results = store.getState().items;
    expect(results).toEqual(expected);
  });

  it('should add default state of vendorSearchResults to the store when vendorSearchReducer handles an action', () => {
    const expected = Search.vendorSearchReducer([], {type: ''});
    const results = store.getState().vendorSearchResults;
    expect(results).toEqual(expected);
  });

  it('should add default state of productSearchResults to the store when productSearchReducer handles an action', () => {
    const expected = Search.productSearchReducer([], {type: ''});
    const results = store.getState().productSearchResults;
    expect(results).toEqual(expected);
  });
});