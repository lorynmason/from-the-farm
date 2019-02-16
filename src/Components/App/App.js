import React, { Component } from 'react';
import { Buy } from '../Buy/Buy';
import { Header } from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route, withRouter } from 'react-router';
import Profile from '../Profile/Profile';
import * as cleaner from '../../helpers/cleaner';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { addUser, removeUser } from '../../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vendors: [],
      products: [],
      user: {}
    }
  }

  async componentDidMount() {
    const response = await fetch('https://xpoll-be.herokuapp.com/api/v1/vendors')
    const results = await response.json()
    this.cleanResults(results)
    
  }

  search = async({ product, location, range }) => {
    const response = await fetch(`https://xpoll-be.herokuapp.com/api/v1/search?loc=${location}&range=${range}&item=${product}`)
    const results = await response.json()
    this.cleanResults(results)
    this.filterProducts(product)
  }

  cleanResults = (results) => {
    const vendors = cleaner.cleanVendors(results.data)
    const products = cleaner.cleanProducts(results.data)
    this.props.addUser(vendors[2]);
    this.setState({
      vendors,
      products
    })
  }

  filterProducts = (id) => {
    const newProducts = this.state.products.filter( product => {
      id = parseInt(id)
      return product.item_id === id
    })
    this.setState({
      products: newProducts
    })
  }

  render() {
    // const products = this.state.products.filter((product) => {
    //   return product.user_id === this.state.user.id;
    // });

    const history = createBrowserHistory()
    console.log(this.state.products)
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/buy" render={({ match }) => <Buy appState={this.state} match={match} history={history} search={this.search}/>}/>
          <Route path="/profile" render={() => <Profile user={this.state.user} products={this.state.products} />}/>
        </Switch>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user));
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
