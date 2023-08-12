import { Service } from 'api/API';
import useData from 'api/useData';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const { data, getData } = useData();

  useEffect(() => {
    getData(Service.getReviews(movieId));
  }, [movieId, getData]);
  return (
    <section>
      <ul>
        {data &&
          data.map(review => {
            return (
              <li key={review.id}>
                <h2>{`Author: ${review.author}`}</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Reviews;
