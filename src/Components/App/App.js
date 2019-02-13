import React, { Component } from 'react';
import Buy from '../Buy/Buy';
import ProductList from '../ProductList/ProductList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coordinates: [[39.7392, -104.9903], [40.0150, -105.2705], [39.6133, -105.0166], [39.7294, -104.8319]]
    }
  }

  render() {
    return (
      <div className="App">
        <Buy coordinates={this.state.coordinates} />
        <ProductList />
      </div>
    );
  }
}

export default App;
