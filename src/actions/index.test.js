import * as actions from './index';

describe('actions', () => {
  const mockUser = {name: 'Pete', id: 5};
  describe('addUser', () => {
    it('should return an action with type ADD_USER', () => {
      const expected = {
        type: 'ADD_USER',
        user: {name: 'Pete', id: 5}
      };
      const result = actions.addUser(mockUser);
      expect(result).toEqual(expected);
    });
  });

  describe('removeUser', () => {
    it('should return an action with type REMOVE_USER', () => {
      const expected = {type: 'REMOVE_USER'};
      const result = actions.removeUser(2);
      expect(result).toEqual(expected);
    });
  });

  describe('addVendors', () => {
    it('should return an action with type ADD_VENDORS', () => {
      const mockVendors = [{name: 'Farm Team', id: 4}];
      const expected = {type: 'ADD_VENDORS', vendors: mockVendors};
      const result = actions.addVendors(mockVendors);
      expect(result).toEqual(expected);
    });
  });

  describe('addProducts', () => {
    it('should return an action with type ADD_PRODUCTS', () => {
      const mockProducts = [{name: 'carrots', id: 2}];
      const expected = {type: 'ADD_PRODUCTS', products: mockProducts};
      const result = actions.addProducts(mockProducts);
      expect(result).toEqual(expected);
    });
  });

  describe('isLoading', () => {
    it('should return an action with type IS_LOADING', () => {
      const expected = {type: 'IS_LOADING', bool: true};
      const result = actions.isLoading(true);
      expect(result).toEqual(expected);
    });
  });

  describe('hasErrored', () => {
    it('should return an action with type HAS_ERRORED', () => {
      const mockMessage = 'The only way out is through';
      const expected = {type: 'HAS_ERRORED', message: mockMessage};
      const result = actions.hasErrored(mockMessage);
      expect(result).toEqual(expected);
    });
  });
});
