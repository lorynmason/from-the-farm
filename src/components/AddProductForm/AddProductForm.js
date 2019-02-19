import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postItem } from '../../thunks/postItem';
import { fetchUser } from '../../thunks/fetchUser';
import { Link } from 'react-router-dom';

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

  handleSubmit = (e) => {
    e.preventDefault();
    const price = this.state.price * 100;
    const url = 'https://xpoll-be.herokuapp.com/api/v1';
    this.props.postItem(`${url}/vendor_items`, {...this.state, price}, this.props.user.token);
    this.props.fetchUser(`${url}/users/${this.props.user.id}`, this.props.user.token)
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

    return (
      <section>
        <form className="add-product-form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <select name="item_id" id="">
            <option value="">select a product</option>
            {productOptions}
          </select>
          <input type="text" name="description" placeholder="description" />
          <input type="text" placeholder="unit i.e lb" name="unit" />
          $<input type="number" placeholder="price i.e 5.50" name="price" step=".01" />
          <button>Submit</button>
        </form>
        <p><Link to="/profile">Return to Profile</Link></p>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => {
  return {
    postItem: (url, item, token) => dispatch(postItem(url, item, token)),
    fetchUser: (url, token) => dispatch(fetchUser(url, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);