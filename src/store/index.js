import { createStore, combineReducers} from 'redux';

import categoriesReducer from './categories.js';
import productsReducer from './products.js';

const reducers = combineReducers({
  categoryStore: categoriesReducer,
  productStore: productsReducer,
});

export default createStore(reducers);