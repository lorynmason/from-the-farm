import React, { Component } from 'react';

class Product extends Component {

  render() {
    let { name, price, unit, description, vendorName, item_id } = this.props.product;
    const newPrice = price/100;
    price = `$${newPrice.toFixed(2)}`;
    return (
      <article key={item_id}className="product">
        <h2>{name}</h2>
        <p>{vendorName}</p>
        <p>{description}</p>
        <div className="pricing-info">
          <p>{price}/{unit}</p>
        </div>
      </article>
    )
  }
}

export default Product;