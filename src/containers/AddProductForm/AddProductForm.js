import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postItem } from '../../thunks/postItem';
import { fetchUser } from '../../thunks/fetchUser';
import { fetchVendors } from '../../thunks/fetchVendors';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import { Loading } from '../../components/Loading/Loading';

export class AddProductForm extends Component {
  constructor() {
    super();
    this.state = {
      item_id: '',
      description: '',
      price: 0,
      unit: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const price = this.state.price * 100;
    const url = 'https://xpoll-be.herokuapp.com/api/v1';
    await this.props.postItem(`${url}/vendor_items`, {...this.state, price}, this.props.user.token);
    this.props.fetchUser(`${url}/users/${this.props.user.id}`, this.props.user.token)
    this.props.fetchVendors(url+'/vendors')
    this.setState({
      item_id: '',
      description: '',
      price: 0,
      unit: ''
    });
  }

  render() {
    const productOptions = this.props.items.map((item) => {
      return <option value={item.id} key={item.id}>{item.name}</option>
    });
    if(this.props.isLoading) {
      return (<Loading />)
    }

    return (
      <section className="add-product">
        <form className="add-product-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h3>Add to Your Inventory</h3>
          <p>Add a Product <select name="item_id" id="">
            <option value="" onChange={this.handleChange}>select a product</option>
            {productOptions}
          </select></p>
          <p>Add Description <input type="text" name="description" placeholder="description"  onChange={this.handleChange}/></p>
          <p>Add Unit Amount <input type="text" placeholder="unit i.e lb" name="unit" onChange={this.handleChange}/></p>
          <p>Add a Price $<input type="number" placeholder="price i.e 5.50" name="price" onChange={this.handleChange}/></p>
          <button>Submit</button>
          <p><Link to="/profile">Return to Profile</Link></p>
        </form>
        <section className="my-products">
        <ProductList products={this.props.user.products} />
        </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items,
  user: state.user,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => {
  return {
    postItem: (url, item, token) => dispatch(postItem(url, item, token)),
    fetchUser: (url, token) => dispatch(fetchUser(url, token)),
    fetchVendors: (url) => dispatch(fetchVendors(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
