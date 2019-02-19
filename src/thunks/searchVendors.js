import { isLoading, hasErrored, vendorSearchResults, productSearchResults, addMessage } from '../actions';
import { cleanVendors, cleanProducts } from '../helpers/cleaner'

export const searchVendors = (url, productId) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false))
      const results = await response.json();
      console.log(results)
      if(!results.data.length) {
        dispatch(addMessage('No Search Results'))
      }
      const ids = results.data.reduce((arr, result) => {
        if(!arr.includes(result.id)) {
          arr.push(result.id)
        }
        return arr
      },[])
      const matches = ids.map(id => results.data.find(result => result.id === id))
      let vendors = cleanVendors(matches);
      let products = cleanProducts(matches);
      vendors = vendors.map(vendor => vendor.id)
      if(productId) {
        products = products.filter(product => {
          return product.item_id === parseInt(productId)
        }).map(product => product.id)
      } else {
        products = products.map(product => product.id)
      }
      dispatch(vendorSearchResults(vendors))
      dispatch(productSearchResults(products))
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(error.message));
    }
  }
}