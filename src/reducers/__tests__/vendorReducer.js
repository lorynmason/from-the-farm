import { vendorReducer } from '../vendorReducer';

describe('vendorReducer', () => {
  it('should return an empty array as its default', () => {
    const mockAction = {type: 'ADD_PRODUCTS', products: ['carrots', 'broccoli', 'beans']}
    const results = vendorReducer([], mockAction);
    expect(results).toEqual([])
  });

  it('should return an array of vendors if the case is ADD_VENDORS', () => {
    const mockAction = {type: 'ADD_VENDORS', vendors: ['larry', 'curly', 'moe']}
    const expected = ['larry', 'curly', 'moe'];
    const results = vendorReducer([], mockAction);

    expect(results).toEqual(expected);
  });
});