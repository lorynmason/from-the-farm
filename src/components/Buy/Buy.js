import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';
import Search from '../Search/Search';
import { connect } from 'react-redux';

export const Buy = ({ productSearchResults, products}) => {
 let productsToShow = products
 if(productSearchResults.length) {
   productsToShow = products.filter( product => {
     return productSearchResults.includes(product.id)
   })
 }
  return (
    <section className="buy">
      <Search />
      <Map />
      <ProductList products={productsToShow} />
    </section>
  );
}

export const mapStateToProps = (state) => ({
  products: state.products,
  productSearchResults: state.productSearchResults
});

export default connect(mapStateToProps)(Buy);