import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '296f6f2b035a33ab472b6b5edb6c14e3';

export const getMovie = (query = 'Jack Reacher') => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};
