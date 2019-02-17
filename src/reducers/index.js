import { combineReducers } from 'redux';
import * as userReducer from './user-reducer';
import vendorReducer from './vendor-reducer';
import productsReducer from './products-reducer';
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  user: userReducer.user,
  vendors: vendorReducer,
  products: productsReducer,
  isLoadingReducer: userReducer.isLoading,
  hasErroredReducer: userReducer.hasErrored,
  message: messageReducer
});

export default rootReducer;