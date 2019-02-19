import { messageReducer } from '../messageReducer';

describe('messageReducer', () => {
  it('should return default state if the action type does not match', () => {
    const mockAction = {type: 'ADD_PRODUCTS', products: ['carrots', 'broccoli', 'beans']}
    const results = messageReducer('', mockAction);
    expect(results).toEqual('');
  });

  it('should return a string if the action type is ADD_MESSAGE', () => {
    const mockAction = {type: 'ADD_MESSAGE', message: 'I may not be in a bottle, but that doesn\'t mean I\'m not a message'}
    const expected = 'I may not be in a bottle, but that doesn\'t mean I\'m not a message';
    const results = messageReducer('', mockAction);

    expect(results).toEqual(expected);
  });
});