import React, { Component } from 'react';

class Product extends Component {

  render() {
    let { name, price, unit, description, vendorName, item_id } = this.props.product;
    const newPrice = price/100;
    price = `$${newPrice.toFixed(2)}`;
    return (
      <tr key={item_id}className="product">
        <td>{name}</td>
        <td>{vendorName}</td>
        <td>{description}</td>
        <td>{price}/{unit}</td>
      </tr>
    )
  }
}

export default Product;