import React, { Component } from 'react';
import Buy from '../Buy/Buy';
import ProductList from '../ProductList/ProductList';
import { Header } from '../Header/Header';
import '../../styles/main.scss';

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
        <Header />
        <Buy coordinates={this.state.coordinates} />
        <ProductList />
      </div>
    );
  }
}

export default App;
