import React, { useState } from 'react';
import LandingPage from './Pages/LandingPage';
import { Router } from '@reach/router';
import { QueryContext } from './QueryContext';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <QueryContext.Provider value={{ value, setValue }}>
        <Navbar />
        <Router>
          <LandingPage path="/" />
        </Router>
        <Footer />
      </QueryContext.Provider>
    </div>
  );
};

export default App;
