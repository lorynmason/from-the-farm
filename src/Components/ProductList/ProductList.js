import React from 'react';
import Product from '../Product/Product';

const ProductList = () => {
  const products = [{
    name: 'chile pepper',
    description: 'Pueblo hot roasted',
    price: 20.00,
    quantity: 1,
    unit: 'bushel'
  },
  {
    name: 'carrot',
    description: 'mini washed',
    price: 5.00,
    quantity: 10,
    unit: 'lbs'
  },
  {
    name: 'cantaloupe',
    description: 'world famous Rocky Ford',
    price: 15.00,
    quantity: 70,
    unit: 'lbs'
  }
]

  const productsToReturn = products.map((product) => {
    return <Product product={product} />
  })
  return (
    <section className="product-list">
      {productsToReturn}
    </section>
  )
}

export default ProductList;