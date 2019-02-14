import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ products }) => {

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