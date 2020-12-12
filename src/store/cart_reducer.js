const initialState = {
  itemsInCart: [],
};

export default function reducer (state=initialState, action){
  const { type, payload } = action;
  let itemLookUpInCart;
  

  switch(type){

    case 'cart/addItem':
      
      itemLookUpInCart = state.itemsInCart.filter(item => item.product._id === payload._id);
      
      console.log('itemLookUpInCart: ',itemLookUpInCart );
      if (itemLookUpInCart.length === 0) {

        return {itemsInCart: [...state.itemsInCart, {product: payload,quantity:1 }] };
      } else {

        let newState = {
          itemsInCart: state.itemsInCart.map( item => {
            return item.product._id === payload._id ? {...item, quantity: item.quantity + 1} : item;
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
