import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import vendorReducer from './vendor-reducer';
import productsReducer from './products-reducer';

const rootReducer = combineReducers({
  userReducer,
  vendorReducer,
  productsReducer
});

export default rootReducer;