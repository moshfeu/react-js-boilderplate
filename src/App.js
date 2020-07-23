import React from 'react';
import s from './scss/global.module.scss';
import LandingPage from './Pages/LandingPage';
import { Router } from '@reach/router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <LandingPage path="/" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
