import { combineReducers } from 'redux';
import * as userReducer from './userReducer';
import vendorReducer from './vendorReducer';
import productsReducer from './productsReducer';
import messageReducer from './messageReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({
  user: userReducer.user,
  vendors: vendorReducer,
  products: productsReducer,
  isLoadingReducer: userReducer.isLoading,
  hasErroredReducer: userReducer.hasErrored,
  message: messageReducer,
  items: itemsReducer
});

export default rootReducer;