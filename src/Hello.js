import React from 'react';
import { useCountRenders } from './useCountRenders';

// React.memo compares the props that are being passed to it every time the paren-component changes. -> only if the props that are being passed to it have changed, it is going to re-render.
export const Hello = React.memo(({ increment }) => {
  // useCountRenders();
  return <button onClick={() => increment(5)}>increment</button>;
});
