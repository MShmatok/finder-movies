import Layouts from 'layouts/Layouts';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};
