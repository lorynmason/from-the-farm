import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProducts } from '../../actions';

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
    e.preventDefault()
    this.props.search(this.state)
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
            <input placeholder="location, address, zipcode" name="location"/>
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
    addProductsToStore: (products) => dispatch(addProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);