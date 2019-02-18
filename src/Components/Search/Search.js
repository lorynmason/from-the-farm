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
    const productOptionsNames = this.props.products.reduce((arr, product) => {
      if(!arr.includes(product.name)) {
        arr.push(product.name)
      }
      return arr     
    },[]);

    const productOptionsIds = this.props.products.reduce((arr, product) => {
      if(!arr.includes(product.item_id)) {
        arr.push(product.item_id)
      }
      return arr     
    },[]);

    const productOptions = productOptionsNames.map((product, i) => {
        return <option value={productOptionsIds[i]} key={productOptionsIds[i]}>{product}</option>
    });

    return (
      <section className="search">
        <h3>Narrow Your Search</h3>
        <form className="search-form" onSubmit={this.sendSearch} onChange={this.handleChange}>
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
  products: state.products
});

export const mapDispatchToProps = (dispatch) => {
  return {
    addProductsToStore: (products) => dispatch(addProducts(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);