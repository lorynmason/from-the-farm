import React, { Component } from 'react';
import Buy from '../Buy/Buy';
import { Header } from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route } from 'react-router';
import Profile from '../Profile/Profile'
import Product from '../Product/Product';
import * as cleaner from '../../helpers/cleaner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      vendors: []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://xpoll-be.herokuapp.com/api/v1/vendors')
    const results = await response.json()
    const vendors = await cleaner.cleanVendors(results.data)
    console.log(vendors)
    this.setState({
      vendors
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/buy" render={() => <Buy coordinates={[]} />}/>
          <Route path="/profile" render={() => <Profile />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
