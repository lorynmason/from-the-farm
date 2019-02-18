import { combineReducers } from 'redux';
import * as userReducer from './user-reducer';
import vendorReducer from './vendor-reducer';
import productsReducer from './products-reducer';
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