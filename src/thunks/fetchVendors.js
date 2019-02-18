import { isLoading, hasErrored, addVendors, addProducts, addItemList } from '../actions';
import { cleanVendors, cleanProducts, cleanItems } from '../helpers/cleaner';

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
      const itemList = cleanItems(products);
      dispatch(addVendors(vendors));
      dispatch(addProducts(products));
      dispatch(addItemList(itemList));
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  }
}
