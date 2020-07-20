import React, { useReducer } from 'react';
import { Link } from '@reach/router';

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'toZero':
      return { count: 0 };
    default:
      throw new Error('Something went wrong in the switch statement');
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <br />
      <Link
        to="/nestedCounter"
        state={{
          dispatch: dispatch,
          count: state.count,
        }}
      >
        nested Counter
      </Link>
    </>
  );
};

export default Counter;
