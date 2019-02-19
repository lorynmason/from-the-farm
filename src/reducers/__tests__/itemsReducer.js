import { itemsReducer } from '../itemsReducer';

describe('itemsReducer', () => {
  it('should return default state if the action does not match', () => {
    const mockAction = {type: 'ADD_VENDORS', vendors: ['larry', 'curly', 'moe']}
    const results = itemsReducer([], mockAction);
    expect(results).toEqual([]);
  });

  it('should return an array of items if the action is ADD_ITEM_LIST', () => {
    const mockAction = {type: 'ADD_ITEM_LIST', items: [{name: 'Berries', id: 1}]}
    const expected = [{name: 'Berries', id: 1}];
    const results = itemsReducer([], mockAction);
    expect(results).toEqual(expected);
  });
});