import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddProductForm extends Component {
  
  render() {
    const productOptions = this.props.items.map((item) => {
      return <option value={item.id} key={item.id}>{item.name}</option>
    });

    return (
      <section>
        <form className="add-product-form">
          <select name="" id="">
          {productOptions}
          </select>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps)(AddProductForm);