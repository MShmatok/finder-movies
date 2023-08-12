import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `4a06fb9567ad4adbaf614250c2ab2e25`,
  include_adult: false,
};

const getTrending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    console.log(data.results);
    return data.results;
  } catch (error) {
    throw new Error('problem with part "/trending/movie/day"');
  }
};

const getDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    console.log('getDetails', data);
    return data;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};
const getCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    console.log('getCast', data);
    return data;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

const getReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    console.log('getReviews', data.results);
    return data.results;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

const getSearch = async query => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    console.log('getReviews', data.results);
    return data.results;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

export const Service = {
  getTrending,
  getDetails,
  getCast,
  getReviews,
  getSearch,
};
