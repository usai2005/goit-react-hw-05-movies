import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI',
  },
};

const Cast = function () {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    async function fetchCast() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
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
      {isLoading && (
        <div>
          <RotatingLines
            strokeColor="#FF0000"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      )}
      {cast.length === 0 ? (
        <p>Sorry, we don't have information about the actors</p>
      ) : (
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  width="100"
                  alt={profile_path}
                ></img>
                {original_name}
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
