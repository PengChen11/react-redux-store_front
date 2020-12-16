import { createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoriesReducer from './categories_reducer.js';
import productsReducer from './products_reducer.js';
import cartReducer from './cart_reducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  categoryStore: categoriesReducer,
  productStore: productsReducer,
  cartStore: cartReducer,
});
// thunk, apply middleware are new
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));