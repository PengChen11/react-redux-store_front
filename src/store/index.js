import { createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoriesReducer from './categories_reducer.js';
import productsReducer from './products_reducer.js';
import cartReducer from './cart_reducer.js';

const reducers = combineReducers({
  categoryStore: categoriesReducer,
  productStore: productsReducer,
  cartStore: cartReducer,
});

export default createStore(reducers, composeWithDevTools());