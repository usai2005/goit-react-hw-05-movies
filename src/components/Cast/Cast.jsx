import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options, BASE_URL } from '../../services/ApiData';
import { List } from './Cast.styled';

const Cast = function () {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    async function fetchCast() {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
        options
      );
      const actorsList = await response.json();

      return actorsList;
    }

    fetchCast()
      .then(actorsList => {
        setCast(actorsList.cast);
      })
      .catch(err => console.error(err))

      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading}
      {cast.length === 0 ? (
        <p>Sorry, we don't have information about the actors</p>
      ) : (
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  width="100"
                  alt={profile_path}
                ></img>
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Cast;
