import {formatPhoneNumber, cleanProducts, cleanVendors } from './cleaner';
import { mockVendors } from './mockVendors';

describe('formatPhoneNumber', () => {
  it('should take in a number and return a string in the correct format', () => {
    const num = 1234567890;
    const expected = '(123) 456-7890';
    const result = formatPhoneNumber(num);
    expect(result).toEqual(expected);
  });
});

describe('cleanProducts', () => {
  it('should take in an array of vendors and return an array of products', () => {
    const mockVendors = [{
      id: 3,
      attributes: {
        name: 'Farm Team',
        products: [{carrots: {quantity: 'some'}}, {berries: {quantity: 'all'}}],
        address: '1234 Somewhere Ln'
      }
    }]

    const expected = [{
      vendorName: 'Farm Team',
      name: 'carrots',
      quantity: 'some'
    },
    {
      vendorName: 'Farm Team',
      name: 'berries',
      quantity: 'all'
    }]

    const result = cleanProducts(mockVendors);
    expect(result).toEqual(expected);
  });
});

describe('cleanVendors', () => {
  it('should take in an array of vendors and return an array of vendors with only the properties we want', () => {
    const expected = [{
      name: 'Basil Connection',
      address: '4950 Beach Court',
      bio: 'The WORLDS Freshest Basil',
      state: 'CO',
      city: 'denver',
      phone: '(231) 341-4141',
      email: 'helter_skelter@example.com',
      lat: 39.7861784,
      long: -105.0178452,
      id: 5
    }]

    const result = cleanVendors(mockVendors);
    expect(result).toEqual(expected);
  });
});