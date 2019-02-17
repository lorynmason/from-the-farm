import React, { Component } from 'react';
import { Buy } from '../Buy/Buy';
import { Header } from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route, withRouter } from 'react-router';
import Profile from '../Profile/Profile';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { addUser, removeUser, addProducts, addMessage } from '../../actions';
import { fetchVendors } from '../../thunks/fetchVendors';
import Message from '../Message/Message';

class App extends Component {

  async componentDidMount() {
    this.props.fetchVendors('https://xpoll-be.herokuapp.com/api/v1/vendors');
    this.props.addUserToStore({
      address: "85 Hooker St",
      bio: "Orange You Glad You Didn't Say Bananas",
      city: "denver",
      email: "ruffnbuff@example.com",
      id: 6,
      lat: 39.717646,
      long: -105.029438,
      name: "Oranges 4 Eva",
      phone: 2313414141,
      state: "CO"
    })
  }

  search = async({ productId, location, range }) => {
    const baseUrl = 'https://xpoll-be.herokuapp.com/api/v1/search'
    let path;
    if (!location) {
      console.log('error: please enter a search location')
      this.props.addMessage('error: please enter a search location')
    } 
    
    if (!range) {
      range = "50"
    } 
    
    if (!productId) {
      path = `?loc=${location}&range=${range}`
    } else {
      path = `?loc=${location}&range=${range}&item=${productId}`
    }
  
    const response = await this.props.fetchVendors(baseUrl + path)
    this.filterProducts(productId, response)
  }

  filterProducts = (id, response) => {
    if (id) {
      const newProducts = this.props.products.filter( product => {
        id = parseInt(id)
        return product.item_id === id
      });
      
      this.props.addProductsToStore(newProducts);
    }
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Header />
        <Message />
        <Switch>
          <Route path="/buy" render={() => <Buy history={history} search={this.search}/>}/>
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
});

export const mapDispatchToProps = (dispatch) => {
  return {
    addUserToStore: (user) => dispatch(addUser(user)),
    fetchVendors: (url) => dispatch(fetchVendors(url)),
    addProductsToStore: (products) => dispatch(addProducts(products)),
    addMessage: (message) => dispatch(addMessage(message))
  } 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
