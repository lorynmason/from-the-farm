import { hasErroredReducer } from '../hasErroredReducer';

describe('hasErroredReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_MESSAGE', message: 'Hello!'}
    const results = hasErroredReducer('', mockAction);
    expect(results).toEqual('');
  });

  it('should return a string if the action type is HAS_ERRORED', () => {
    const mockAction = {type: 'HAS_ERRORED', message: 'it broke'}
    const results = hasErroredReducer('', mockAction);
    expect(results).toEqual('it broke');
  });
});