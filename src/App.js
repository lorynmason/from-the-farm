import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Buy } from './Components/Buy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buy />
      </div>
    );
  }
}

export default App;
