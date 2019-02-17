import { isLoading, hasErrored, addVendors, addProducts } from '../actions';
import { cleanVendors, cleanProducts } from '../helpers/cleaner';

export const fetchVendors = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false))
      const results = await response.json();
      const vendors = cleanVendors(results.data);
      const products = cleanProducts(results.data);
      console.log(results.data)
      dispatch(addVendors(vendors));
      dispatch(addProducts(products));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  }
}
