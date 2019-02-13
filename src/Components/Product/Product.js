import React, { Component } from 'react';

class Product extends Component {

  render() {
    const { name, price, unit, description, quantity } = this.props.product;
    return (
      <article className="product" style={{display: 'flex'}}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="pricing-info">
          <p>{price}</p>
          <p>{quantity}</p>
          <p>{unit}</p>
        </div>
      </article>
    )
  }
}

export default Product;