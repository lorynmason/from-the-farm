import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.props.postItem(this.state);
  }

  render() {
    const productOptions = this.props.items.map((item) => {
      return <option value={item.id} key={item.id}>{item.name}</option>
    });

    return (
      <section>
        <form className="add-product-form" onChange={this.handleChange} onSubmit={handleSubmit}>
          <select name="item_id" id="">
          {productOptions}
          </select>
          <input type="text" name="description" placeholder="description" value={this.state.description} />
          <input type="text" placeholder="unit i.e lb" name="unit" value={this.state.unit} />
          $<input type="number" placeholder="price i.e 5.50" name="price" value={this.state.price} />
          <button>Submit</button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  postItem: (item) => dispatch(postItem(item))
})

export default connect(mapStateToProps)(AddProductForm);