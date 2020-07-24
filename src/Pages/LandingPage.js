import React from 'react';
import { getMovie } from '../API/apiMovies';

const LandingPage = () => {
  async function getData(query) {
    const data = await getMovie(query);
    return data;
  }

  const apiData = getData('jack reacher');
  console.log(apiData);
  return <div>LandingPage</div>;
};

export default LandingPage;
