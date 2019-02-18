import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';
import Search from '../Search/Search';
import { connect } from 'react-redux';

export const Buy = (props) => {
  console.log(props);
  return (
    <section className="buy">
      <Search />
      <Map />
      <ProductList products={props.products} />
    </section>
  );
}

export const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps)(Buy);