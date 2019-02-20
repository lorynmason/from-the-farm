import { isLoading, hasErrored, vendorSearchResults, productSearchResults, addMessage } from '../actions';
import { filterSearchResults } from '../helpers/cleaner'

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
      if(!results.data.length) {
        dispatch(addMessage('No Search Results'))
      }
      const filteredResults = filterSearchResults(results.data, productId);
      dispatch(vendorSearchResults(filteredResults.vendors));
      dispatch(productSearchResults(filteredResults.products));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  }
}
