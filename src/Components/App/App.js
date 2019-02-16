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
import { fetchVendors } from '../../thunks/fetchVendors';

class App extends Component {

  componentDidMount() {
    this.props.fetchVendors();  
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
    const history = createBrowserHistory()
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/buy" render={({ match }) => <Buy appState={this.props} history={history} search={this.search}/>}/>
          <Route path="/profile" render={() => <Profile user={this.props.user} products={this.props.products} />}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  vendors: state.vendors,
  products: state.products,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => {
  return {
    addUserToStore: (user) => dispatch(addUser(user)),
    fetchVendors: () => dispatch(fetchVendors())
  } 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
