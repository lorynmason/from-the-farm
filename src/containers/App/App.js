import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import Buy from '../Buy/Buy';
import AddProductForm from '../AddProductForm/AddProductForm';
import Header from '../Header/Header';
import '../../styles/main.scss';
import Profile from '../Profile/Profile';
import { fetchVendors } from '../../thunks/fetchVendors';
import Message from '../Message/Message';
import { About } from '../About/About';
import Login from '../../containers/Login/Login';

export class App extends Component {
  async componentDidMount() {
    this.props.fetchVendors('https://xpoll-be.herokuapp.com/api/v1/vendors');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Message />
        <Switch>
          <Route exact path="/" component={Buy} />
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

export const mapStateToProps = state => ({
  vendors: state.vendors,
  products: state.products,
  user: state.user,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchVendors: url => dispatch(fetchVendors(url))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
