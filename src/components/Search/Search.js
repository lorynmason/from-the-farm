import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProducts, addMessage } from '../../actions';
import { searchVendors } from '../../thunks/searchVendors'

export class Search extends Component {
  constructor(){
    super()
    this.state = {
      productId: '',
      location: '',
      range: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendSearch = (e) => {
    const { productId, location, range } = this.state
    let newRange = range
    e.preventDefault()
    const baseUrl = 'https://xpoll-be.herokuapp.com/api/v1/search'
    let path;
    if (!location) {
      this.props.addMessage('error: please enter a search location')
      return
    } 
    if (!range) {
      newRange = "50"
    } 
    if (!productId) {
      path = `?loc=${location}&range=${newRange}`
    } else {
      path = `?loc=${location}&range=${newRange}&item=${productId}`
    }
    this.props.searchVendors(baseUrl + path, productId)
    this.setState({
      location: ''
    })
  }

  render() {
    const productOptions = this.props.items.map((item) => {
      return <option value={item.id} key={item.id}>{item.name}</option>
    });

    return (
      <section className="search">
        <form className="search-form" onSubmit={this.sendSearch} onChange={this.handleChange}>
        <h3>Narrow Your Search</h3>
          <div className="search-options">
            <select id="product-options" name="productId">
            <option value="">select a product</option>
              { productOptions }
            </select>
            <input placeholder="location, address, zipcode" name="location" value={this.state.location}/>
            <select id="radius-options" name="range">
              <option value="50">50 mile radius</option>
              <option value="100">100 mile radius</option>
              <option value="150">150 mile radius</option>
              <option value="200">200 mile radius</option>
              <option value="250">250 mile radius</option>
              <option value="300">300 mile radius</option>
              <option value="500">500 mile radius</option>
            </select>
          </div>
          <button>Search</button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  products: state.products,
  items: state.items
});

export const mapDispatchToProps = (dispatch) => {
  return {
    addProductsToStore: (products) => dispatch(addProducts(products)),
    searchVendors: (url, id) => dispatch(searchVendors(url, id)),
    addMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);