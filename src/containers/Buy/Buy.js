import React from 'react';
import Map from '../Map/Map';
import { ProductList } from '../../components/ProductList/ProductList';
import Search from '../Search/Search';
import { connect } from 'react-redux';
import { Loading } from '../../components/Loading/Loading';
import PropTypes from 'prop-types';

export const Buy = ({ productSearchResults, products, isLoading, history}) => {
 let productsToShow = products
 if(isLoading) {
   return (<Loading />)
 }
 if(productSearchResults.length) {
   productsToShow = products.filter( product => {
     return productSearchResults.includes(product.id)
   })
 }
  return (
    <section className="buy">
      <Search />
      <Map history={history}/>
      <ProductList products={productsToShow} />
    </section>
  );
}

export const mapStateToProps = (state) => ({
  products: state.products,
  productSearchResults: state.productSearchResults,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(Buy);

Buy.propTypes = {
  products: PropTypes.array,
  productSearchResults: PropTypes.array,
  isLoading: PropTypes.bool
}
