import { isLoadingReducer } from '../isLoadingReducer';

describe('isLoadingReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_MESSAGE', message: 'Hello!'}
    const results = isLoadingReducer(false, mockAction);
    expect(results).toEqual(false);
  });

  it('should return a boolean if the action type is IS_LOADING', () => {
    const mockAction = {type: 'IS_LOADING', bool: true}
    const results = isLoadingReducer(false, mockAction);
    expect(results).toEqual(true);
  });
});