const initialState = {
  count:0,
};

/*
  All actions look like this:
  {
    type: "DOSOMETHING",
    payload: [1,2,3]
  }
*/

export default function reducer( state=initialState, action ) {
  // const type = action.type;
  // const payload = action.payload;
  // Use object deconstruction to make those 2 lines happen like magic ...
  const {type, payload} = action;

  // Lots of ifs can be ugly
  // if(type === "x") { }
  // else if ( type === "y" ) { }
  // else if ( type === "z" ) { }

  // Switch makes it easier to read
  switch(type) {
    case 'counter/INITIALIZE':
      console.log('payload is ', payload);
      return { ...state, count: parseInt(payload, 10) };
    case 'INCREMENT':
      return { ...state, count: state.count + 1};
    case 'DECREMENT':
      return { ...state, count: state.count - 1};
    default:
      return state;
  }
}

// elsewere ... import {increment} from 'thisfile'
export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const initialize = (number) =>  {
  console.log('counter init is called');
  return {
    type: 'counter/INITIALIZE',
    payload: number,
  };
};
