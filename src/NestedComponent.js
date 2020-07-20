import React from 'react';

const NestedComponent = ({ location }) => {
  console.log(location);
  return (
    <div>
      {/* you might want to comment this out since it will otherwise display an error */}
      {/* <h1>{location.state.count}</h1>
      <button onClick={() => location.state.dispatch({ type: 'increment' })}>
        increment
      </button>
      <button onClick={() => location.state.dispatch({ type: 'toZero' })}>
        Set to zero
      </button> */}
    </div>
  );
};

export default NestedComponent;
