import React from 'react';

export const Search = ({ products }) => {
  console.log(products)
  const sendSearch = (e) => {
    e.preventDefault()
  }
  const productOptions = products.map(product => {
    return <option value={product.name}>{product.name}</option>    
  })
  return (
    <form className="search" onSubmit={sendSearch}>
      <h3>Narrow Your Search</h3>
      <select id="product-options">
      <option value="">select a product</option>
        { productOptions }
      </select>
      <input placeholder="location, address, zipcode"/>
      <select id="radius-options">
      <option value="50">50 mile radius</option>
        <option value="100">100 mile radius</option>
        <option value="150">150 mile radius</option>
        <option value="200">200 mile radius</option>
        <option value="250">250 mile radius</option>
        <option value="300">300 mile radius</option>
        <option value="500">500 mile radius</option>
      </select>
      <button>Search</button>
    </form>
  )
}
