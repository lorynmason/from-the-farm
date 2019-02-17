import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';
import Search from '../Search/Search'

export const Buy = (props) => {
  return (
    <section className="buy">
      <Search search={props.search}/>
      <Map history={props.history}/>
      <ProductList />
    </section>
  );
}
