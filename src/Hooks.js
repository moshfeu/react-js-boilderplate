import React, { useState, useRef, useLayoutEffect } from 'react';
import useForm from './useForm';
// import { useFetch } from './useFetch';
import { RenderCount } from './RenderCount';
import { useMeasure } from './useMeasure';

const UseState = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  const inputRef = useRef();
  const hello = useRef(() => console.log('hello there!'));
  const [showHello, setShowHello] = useState(true);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  // }, []);
  const [rect, inputRef2] = useMeasure([]);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <RenderCount />}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        ref={inputRef2}
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <input
        type="firstName"
        name="firstName"
        placeholder="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          // console.log(inputRef.current.value);
          hello.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default UseState;
