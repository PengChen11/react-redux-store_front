const initialState = {
  itemsInCart: [],
};

export default function reducer (state=initialState, action){
  const { type, payload } = action;
  let itemLookUpInCart;
  

  switch(type){

    case 'cart/addItem':
      
      itemLookUpInCart = state.itemsInCart.filter(item => item.product._id === payload._id);
      

      if (itemLookUpInCart.length === 0) {
        const newState = {
          itemsInCart: [
            ...state.itemsInCart, 
            {
              product: {...payload, inStock: payload.inStock - 1},quantity:1,
            },
          ],
        };
        return newState;

      } else {

        const newState = {
          itemsInCart: state.itemsInCart.map( item => {
            return item.product._id === payload._id ? {product: {...payload, inStock: payload.inStock - 1}, quantity: item.quantity + 1} : item;
          })};

        return newState;
      }

    case 'cart/removeItem':
      return {itemsInCart: state.itemsInCart.filter(item => item.product._id !== payload)};

    default:
      return state;
  }
}

export const addItem = product => {
  return {
    type:'cart/addItem',
    payload: product,
  };
};


export const removeItem = productID => {
  return {
    type:'cart/removeItem',
    payload: productID,
  };
};
