import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser, addProducts } from '../../actions';


export const Message = () => {
  
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
    addProductsToStore: (products) => dispatch(addProducts(products))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);