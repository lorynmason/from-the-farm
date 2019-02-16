import React from 'react';

export const Search = ({ products }) => {
  console.log(products)
  return (
    <form className="search">
      <h3>Narrow Your Search</h3>
      <input placeholder="location, address, zipcode"/>
    </form>
  )
}
