const axios = require('axios');

const initialState = {
  products: [],
};

export default function reducer (state=initialState, action){
  const { type, payload } = action;

  switch(type){

    case 'products/initialize':
      return {...state, products:payload };

    case 'products/reduceQty': {

      const newState = state.products.map(product => 
        product._id === payload._id ? payload : product
      );

      return {...state, products:newState};
    }

    case 'products/increaseQty':
      return {...state, products:payload };
    
    default:
      return state;
  }
}



export const init = (category) => async dispatch => {
  const url = `${process.env.REACT_APP_API}/api/products/category/${category}`;
  const {data} = await axios.get(url);

  dispatch( {
    type: 'products/initialize',
    payload: data,
  });
};



export const reduceStockQty = (product) => async dispatch =>{
  const url = `${process.env.REACT_APP_API}/api/products`;
  const updatedProduct = {...product, inStock: product.inStock - 1 };

  await axios.put(`${url}/${product._id}`, updatedProduct);

  dispatch( {
    type: 'products/reduceQty',
    payload: updatedProduct,
  });

};

export const increaseStockQty = (itemFromCart) => async dispatch =>{
  const url = `${process.env.REACT_APP_API}/api/products`;
  
  const updatedProduct = {...itemFromCart.product, inStock: itemFromCart.quantity + itemFromCart.product.inStock };

  await axios.put(`${url}/${itemFromCart.product._id}`, updatedProduct);

  const {data} = await axios.get(`${url}/category/${itemFromCart.product.category}`);

  dispatch( {
    type: 'products/increaseQty',
    payload: data,
  });

};