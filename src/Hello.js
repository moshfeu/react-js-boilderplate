import React, { useContext } from 'react';
import UserContext from './UserCreator';

const Hello = () => {
  const globalData = useContext(UserContext);
  return (
    <div>
      <h1>Hello from Hello component!</h1>
      <h2>{globalData}</h2>
    </div>
  );
};

export default Hello;
