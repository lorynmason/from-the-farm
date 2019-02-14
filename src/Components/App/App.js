import React, { Component } from 'react';
import Buy from '../Buy/Buy';
import { Header } from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route } from 'react-router';
import Profile from '../Profile/Profile'

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
        <Switch>
          <Route path="/buy" render={() => <Buy coordinates={this.state.coordinates} />}/>
          <Route path="/profile" render={() => <Profile />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
