import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options, BASE_URL } from '../../services/ApiData';
import { List } from './Reviews.styled';

const Reviews = function () {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchReviews() {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
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
      {isLoading}
      {reviews.length === 0 ? (
        <p>Unfortunately, nobody left the review</p>
      ) : (
        <List>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;
