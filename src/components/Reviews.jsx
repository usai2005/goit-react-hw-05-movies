import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI',
  },
};

const Reviews = function () {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchReviews() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        options
      );
      const reviews = await response.json();
      return reviews;
    }

    fetchReviews()
      .then(reviews => {
        setReviews(reviews.results);
      })
      .catch(err => console.error(err))

      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {<Loader loading={isLoading} />}
      {reviews.length === 0 ? (
        <p>Unfortunately, nobody left the review</p>
      ) : (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
