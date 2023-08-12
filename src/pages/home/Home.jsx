import React, { useEffect } from 'react';
import { HomeStyled } from './home.styled';
import { Service } from 'api/API';
import useData from 'api/useData';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const { data, getData } = useData();

  useEffect(() => {
    getData(Service.getTrending());
  }, [getData]);

  return (
    <HomeStyled>
      <MoviesList movies={data} />
    </HomeStyled>
  );
};

export default Home;
