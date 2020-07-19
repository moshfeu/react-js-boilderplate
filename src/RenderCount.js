import React, { useRef, useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';
export const RenderCount = () => {
  // const renders = useRef(0);
  // console.log('re-renders:', renders.current++);
  const [count, setCount] = useState(() => {
    const number = JSON.parse(localStorage.getItem('count'));
    if (number === null) {
      return 0;
    }
    return number;
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem('count:', JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);
  return (
    <div>
      {/* amount of re-renders: {renders.current++} */}
      {/* <h1>result from api:</h1> */}
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{!data ? 'loading...' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
