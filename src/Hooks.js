import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

const UseState = () => {
  const [count, setCount] = useState(0);
  const favouriteNums = [7, 21, 37];

  // this function only gets re-rendered, if setCount changes. Not every time the count changes.
  const increment = useCallback(
    (n) => {
      // this is because we eliminated the dependency to  "count" by using an updater function in setCount:
      setCount((c) => c + n);
      // ... instead of doing it like this:
      // setCount(count + 1);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favouriteNums.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default UseState;
