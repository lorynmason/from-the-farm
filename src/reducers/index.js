import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { hasErroredReducer } from './hasErroredReducer';
import { vendorReducer } from './vendorReducer';
import { productsReducer } from './productsReducer';
import { messageReducer } from './messageReducer';
import { itemsReducer } from './itemsReducer';
import * as Search from './searchResultsReducer';

 export const rootReducer = combineReducers({
  user: userReducer,
  vendors: vendorReducer,
  products: productsReducer,
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  message: messageReducer,
  items: itemsReducer,
  vendorSearchResults: Search.vendorSearchReducer,
  productSearchResults: Search.productSearchReducer
});
