import React from 'react';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

export const ProductList = ({ products }) => {
  let productsToReturn;
  if (products) {
    productsToReturn = products.map((product) => {
      return <Product product={product} key={product.id} />
    });
  }
  return (
    <section className="table-container">
      <table className="product-list">
        <thead className="product product-list-header">
          <tr>
            <th>Product</th>
            <th>Vendor</th>
            <th>Description</th>
            <th>$Price/Unit</th>
          </tr>
        </thead>
        <tbody>
          {productsToReturn}
        </tbody>
      </table>
    </section>
  )
}

ProductList.propTypes = {
  products: PropTypes.array
}
