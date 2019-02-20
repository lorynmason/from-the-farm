import React, { Component } from 'react';
import Buy from '../Buy/Buy';
import AddProductForm from '../AddProductForm/AddProductForm';
import Header from '../Header/Header';
import '../../styles/main.scss';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import Profile from '../Profile/Profile';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { addUser, removeUser, addProducts, addMessage, isLoading } from '../../actions';
import { fetchVendors } from '../../thunks/fetchVendors';
import { Loading } from '../Loading/Loading'
import Message from '../Message/Message';
import { About } from '../About/About'
import Login from '../../containers/Login/Login'


class App extends Component {
  async componentDidMount() {
    this.props.fetchVendors('https://xpoll-be.herokuapp.com/api/v1/vendors');
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Header />
        <Message />
        <Switch>
          <Route exact path="/" component={Buy} />
          <Route path="/loading" component={Loading}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/buy" component={Buy} />
          <Route path="/add-product" render={() => this.props.user.name ? (<AddProductForm />) : (<Redirect to="/login" />)} />
          <Route path="/profile" render={() => this.props.user.name ? (<Profile />) : (<Redirect to="/login" />)} />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  vendors: state.vendors,
  products: state.products,
  user: state.user,
  isLoading: state.isLoading
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
