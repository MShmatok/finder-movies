import MovieItem from 'components/MovieItem/MovieItem';
import React from 'react';

const MoviesList = ({ movies = [] }) => {
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return <MovieItem key={movie.id} data={movie} />;
        })}
    </ul>
  );
};

export default MoviesList;
