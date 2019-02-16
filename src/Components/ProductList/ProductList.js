import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ products }) => {

  const productsToReturn = products.map((product) => {
    return <Product product={product} key={product.id} />
  })

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
          <tr>
            <td></td>
          </tr>
          {productsToReturn}
        </tbody>
      </table>
    </section>
  )
}

export default ProductList;