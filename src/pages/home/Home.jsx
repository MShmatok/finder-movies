import React, { useEffect, useState } from 'react';
import { HomeStyled } from './home.styled';
import { Service } from 'api/API';
import useData from 'api/useData';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  // const [data, setData] = useState(null);
  // const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   setLoader(true);
  //   Service.getTrending(controller.signal)
  //     .then(setData)
  //     .finally(() => setLoader(false));
  // }, []);

  const { data, loader, getData } = useData();

  useEffect(() => {
    const controller = new AbortController();
    getData(Service.getTrending, controller.signal);

    return () => {
      controller.abort();
    };
  }, [getData]);
  console.log(loader);
  return (
    <HomeStyled>
      {loader && <Loader loader={loader} />}
      {!loader && <MoviesList movies={data} />}
    </HomeStyled>
  );
};

export default Home;
