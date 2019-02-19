import { userReducer } from '../userReducer';

describe('userReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'IS_LOADING', bool: true}
    const results = userReducer({}, mockAction);
    expect(results).toEqual({});
  });

  it('should return a user object if the action type is ADD_USER', () => {
    const mockAction = {type: 'ADD_USER', user: {name: 'Melvin'}}
    const expected = {name: 'Melvin'}
    const results = userReducer({}, mockAction);
    expect(results).toEqual(expected);
  });

  it('should return an empty object if the type is REMOVE_USER', () => {
    const mockAction = {type: 'REMOVE_USER'}
    const results = userReducer({name: 'Melvin'}, mockAction);
    expect(results).toEqual({});
  });
});