const axios = require('axios');

const initialState = {
  categories: [],
  active: null,
};

export default function reducer (state=initialState, action){
  const { type, payload } = action;

  switch(type){

    case 'categories/initialize':
      return {...state, categories:payload, active: payload[0] };

    case 'categories/active':
      return {...state, active: payload};
    
    default:
      return state;
  }
}

export const active = (category) =>{
  return {
    type: 'categories/active',
    payload: category,
  };
};

export const init = () => async dispatch =>{
  const url = `${process.env.REACT_APP_API}/api/categories`;
  const {data} = await axios.get(url);

  dispatch( {
    type: 'categories/initialize',
    payload: data,
  });
};
