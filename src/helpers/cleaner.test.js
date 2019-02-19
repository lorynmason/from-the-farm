import { 
  formatPhoneNumber, 
  cleanProducts, 
  cleanVendors, 
  cleanUser, 
  cleanUserProducts,
  cleanItems } from './cleaner';
import { mockVendors, mockUser } from './mockData';

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

describe('cleanUser', () => {
  it('should take in an object and return an object with the correct properties', () => {
    const expected = {
      name: 'Basil Connection',
      address: '4950 Beach Court',
      bio: 'The WORLDS Freshest Basil',
      state: 'CO',
      city: 'denver',
      zip: 80221,
      phone: '(231) 341-4141',
      email: 'helter_skelter@example.com',
      lat: 39.7861784,
      long: -105.0178452,
      id: 5,
      img_url: null,
      products: [
        {
          description: "lb of berries",
          id: 3,
          item_id: 1,
          name: "Berries",
          price: 1400,
          unit: "lb",
          user_id: 5,
        },
        {
          description: "a lb of potatoes",
          id: 17,
          item_id: 4,
          name: "Potatoes",
          price: 170,
          unit: "lb",
          user_id: 5,
        }
      ],
      token: "this is my token"
    }

    const results = cleanUser(mockUser, "this is my token");
    expect(results).toEqual(expected);
  });
});

describe('cleanUserProducts', () => {
  it('should take in an array and return an array of products with the correct properties', () => {
    const expected = [
      {
        "name": "Berries",
        "id": 3,
        "user_id": 5,
        "item_id": 1,
        "price": 1400,
        "unit": "lb",
        "description": "lb of berries"
      },
      {
        "name": "Potatoes",
        "id": 17,
        "user_id": 5,
        "item_id": 4,
        "price": 170,
        "unit": "lb",
        "description": "a lb of potatoes"
      }
    ];

    const results = cleanUserProducts(mockUser.attributes.products);
    expect(results).toEqual(expected);
  });
});

describe('cleanItems', () => {
  it('should take in an array of products and return an array with just names and ids', () => {
    const expected = [{
        name: "Berries",
        id: 1},
      {name: "Potatoes",
        id: 4}];

    const results = cleanItems(mockUser.attributes.products);
    expect(results).toEqual(expected);
  });
});
