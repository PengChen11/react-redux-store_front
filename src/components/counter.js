import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, initialize} from '../store/counter.js';

export default function Counter(){
  const count = useSelector( state =>  state.counter.count);

  const dispatch = useDispatch();
  const addOne = () => {
    dispatch( increment() );
  };

  const subtractOne = () => {
    dispatch( decrement() );
  };

  useEffect(()=>{
    dispatch(initialize(100));
  },[]);


  return (
    <>
      <h1>{count}</h1>
      <button onClick={subtractOne}>Subtract 1</button>
      <button onClick={addOne}>Add 1</button>
    </>
  );
}