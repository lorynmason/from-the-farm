import { productsReducer } from '../productsReducer';

describe('productsReducer', () => {
  it('should return default state if the action does not match', () => {
    const mockAction = {type: 'ADD_VENDORS', vendors: ['larry', 'curly', 'moe']}
    const results = productsReducer([], mockAction);
    expect(results).toEqual([]);
  });

  it('should return an array of products if the action is ADD_PRODUCTS', () => {
    const mockAction = {type: 'ADD_PRODUCTS', products: ['carrots', 'broccoli', 'beans']}
    const expected = ['carrots', 'broccoli', 'beans'];
    const results = productsReducer([], mockAction);

    expect(results).toEqual(expected);
  })
});