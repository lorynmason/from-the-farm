import React, { Component } from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';

export class Buy extends Component {
  render() {
    return (
      <section className="buy">
        <Map coordinates={this.props.coordinates} />
        <ProductList />
      </section>
    )
  }
}

export default Buy;
