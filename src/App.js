import React from 'react';
import LandingPage from './Pages/LandingPage';
import { Router } from '@reach/router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <LandingPage path="/" />
      </Router>
      <Footer />
    </>
  );
};

export default App;
