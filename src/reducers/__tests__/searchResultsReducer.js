import { vendorSearchReducer, productSearchReducer } from '../searchResultsReducer';

describe('vendorSearchReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_BANANAS', bananas: 2}
    const results = vendorSearchReducer([], mockAction);
    expect(results).toEqual([]);
  });

  it('should return an array of results if the action type is VENDOR_SEARCH', () => {
    const mockAction = {type: 'VENDOR_SEARCH', results: ['yes', 'no']}
    const results = vendorSearchReducer([], mockAction);
    expect(results).toEqual(['yes', 'no']);
  });
});

describe('productSearchReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_BANANAS', bananas: 2}
    const results = productSearchReducer([], mockAction);
    expect(results).toEqual([]);
  });

  it('should return an array of results if the action type is PRODUCT_SEARCH', () => {
    const mockAction = {type: 'PRODUCT_SEARCH', results: ['yes', 'no']}
    const results = productSearchReducer([], mockAction);
    expect(results).toEqual(['yes', 'no']);
  });
});