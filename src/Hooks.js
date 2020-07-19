import React, { useEffect, useState } from 'react';
import useForm from './useForm';
import { useFetch } from './useFetch';

const UseState = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

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

  return (
    <div>
      <h1>result from api:</h1>
      <div>{loading ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <h1>input fields:</h1>
      <input
        name="email"
        value={values.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="firstName"
        name="firstName"
        placeholder="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
    </div>
  );
};

export default UseState;
