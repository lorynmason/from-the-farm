import React, { Component } from 'react';

class Product extends Component {

  render() {
    let { name, price, unit, description, quantity } = this.props.product;
    const newPrice = price/100;
    price = `$${newPrice.toFixed(2)}`;
    return (
      <article className="product">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="pricing-info">
          <p>{price}/{unit}</p>
        </div>
      </article>
    )
  }
}

export default Product;