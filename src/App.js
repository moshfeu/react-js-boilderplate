import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import Hello from './Hello';
import UserCreator from './UserCreator';
import Counter from './Counter';
import NestedComponent from './NestedComponent';

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Base</Link>
        <br />
        <Link to="/Home">Home</Link>
        <br />
        <Link to="/Hello">Hello</Link>
        <br />
        <Link to="/Counter">Counter</Link>
      </header>
      <UserCreator.Provider value="hi there from context api!">
        <Router>
          <Home path="/Home" />
          <Hello path="/Hello" />
          <Counter path="/Counter" />
          <NestedComponent path="/nestedCounter" />
        </Router>
      </UserCreator.Provider>
    </>
  );
};

export default App;
