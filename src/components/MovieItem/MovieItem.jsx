import React from 'react';

const MovieItem = ({ data }) => {
  return <li>{data.overview}</li>;
};

export default MovieItem;
