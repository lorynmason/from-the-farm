import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    unit: PropTypes.string,
    description: PropTypes.string,
    vendorName: PropTypes.string,
    item_id: PropTypes.number
  })
}