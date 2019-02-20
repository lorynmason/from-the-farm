export const mockVendors = [
  {
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
  }
]

export const mockUser = {
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
      }
    ]
  }
}
