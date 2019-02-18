import {formatPhoneNumber, cleanProducts, cleanVendors } from './cleaner';

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
    const mockVendors = [{
      "id": "5",
        "type": "user",
        "attributes": {
            "name": "Basil Connection",
            "account_type": "vendor",
            "address": "4950 Beach Court",
            "city": "denver",
            "state": "CO",
            "zip": 80221,
            "email": "helter_skelter@example.com",
            "phone": 2313414141,
            "lat": 39.7861784,
            "long": -105.0178452,
            "bio": "The WORLDS Freshest Basil",
            "img_url": null,
            "products": [
                {
                    "Berries": {
                        "id": 3,
                        "user_id": 5,
                        "item_id": 1,
                        "price": 1400,
                        "unit": "lb",
                        "description": "lb of berries"
                    }
                },
                {
                    "Potatoes": {
                        "id": 17,
                        "user_id": 5,
                        "item_id": 4,
                        "price": 170,
                        "unit": "lb",
                        "description": "a lb of potatoes"
                    }
                }]
              }
    }]

    const expected
  })
})