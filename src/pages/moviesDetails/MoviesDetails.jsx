import React, { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import useData from 'api/useData';

import { Service } from 'api/API';
import { SectionStyled } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const location = useRef(useLocation());
  const { data, getData } = useData();
  const { movieId } = useParams();

  useEffect(() => {
    getData(Service.getDetails(movieId));
  }, [getData, movieId]);

  return (
    <>
      {data && (
        <>
          <Link to={location.current.state?.from ?? '/'}>Go Back</Link>
          <SectionStyled>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
              height={500}
            />
            <div>
              <h1>{data.title}</h1>
              <p>{`User score: ${data.vote_average * 10}%`}</p>
              <h2>Overview</h2>
              <p>{data.overview}</p>
              <h2>Genres</h2>
              <p>{data.genres.map(g => g.name).join(' ')}</p>
            </div>
          </SectionStyled>
          <section>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </section>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesDetails;
