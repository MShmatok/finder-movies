import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';

const MoviesList = ({ movies = [] }) => {
  return (
    movies &&
    movies.map(movie => {
      return <MovieItem data={movie} />;
    })
  );
};

export default MoviesList;
