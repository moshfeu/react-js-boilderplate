import React, { useContext } from 'react';
import UserContext from './UserCreator';

const Home = () => {
  const globalData = useContext(UserContext);

  return (
    <div>
      <h1>Hello from Home component!</h1>
      <ul>
        <li>
          {[...globalData].reduce((acc = [], cur) => {
            if (cur !== ' ') {
              return [...acc, cur];
            }
            return acc;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Home;
