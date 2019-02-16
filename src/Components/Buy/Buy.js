import React from 'react';
import Map from '../Map/Map';
import ProductList from '../ProductList/ProductList';

export const Buy = ({ appState }) => {
  const { vendors, products } = appState
    return (
      <section className="buy">
        <Map vendors={vendors}/>
        <ProductList products={products}/>
      </section>
    )
}

