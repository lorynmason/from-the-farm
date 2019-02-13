import React, { Component } from 'react';
import Map from '../Map/Map';

export class Buy extends Component {

  render() {
    return (
      <section className="buy">
        <Map coordinates={this.props.coordinates} />
      </section>
    )
  }
}

export default Buy;
