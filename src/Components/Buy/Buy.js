import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';

export const Buy = ({appState, location}) => {
  const { vendors, products } = appState
    return (
      <section className="buy">
        <Map vendors={vendors} location={location}/>
        <ProductList products={products}/>
      </section>
    )
}

