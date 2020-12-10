const initialState = {
  products: [],
};

export default function reducer (state=initialState, action){
  const { type, payload } = action;

  switch(type){

    case 'products/initialize':
      return {...state, products:payload };
    
    default:
      return state;
  }
}


export const init = (products) =>{
  return {
    type: 'products/initialize',
    payload: products,
  };
};