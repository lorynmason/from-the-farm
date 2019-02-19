import { combineReducers } from 'redux';
import * as userReducer from './userReducer';
import vendorReducer from './vendorReducer';
import productsReducer from './productsReducer';
import messageReducer from './messageReducer';
import itemsReducer from './itemsReducer';
import * as Search from './searchResultsReducer'

const rootReducer = combineReducers({
  user: userReducer.user,
  vendors: vendorReducer,
  products: productsReducer,
  isLoadingReducer: userReducer.isLoading,
  hasErroredReducer: userReducer.hasErrored,
  message: messageReducer,
  items: itemsReducer,
  vendorSearchResults: Search.vendorSearchReducer,
  productSearchResults: Search.productSearchReducer
});

export default rootReducer;