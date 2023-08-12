import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ data: { title, id } }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
