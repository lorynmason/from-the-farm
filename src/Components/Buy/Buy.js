import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';

export const Buy = (props) => {
  const { vendors, products } = props.appState
    return (
      <section className="buy">
        <Map vendors={vendors} history={props.history} />
        <ProductList products={products}/>
      </section>
    )
}

