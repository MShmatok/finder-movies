import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `4a06fb9567ad4adbaf614250c2ab2e25`,
  include_adult: false,
};

const getTrending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results;
  } catch (error) {
    throw new Error('problem with part "/trending/movie/day"');
  }
};

export const Service = { getTrending };
