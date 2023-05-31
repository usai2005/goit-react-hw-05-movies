import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title, List } from './Home.styled';
import { options, BASE_URL } from '../../services/ApiData';

const Home = function () {
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const response = await fetch(
        `${BASE_URL}/trending/all/day?language=en-US`,
        options
      );

      const movies = await response.json();
      return movies;
    }

    fetchTrending()
      .then(movies => {
        const moviesList = movies.results;
        setMoviesList(moviesList);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          );
        })}
      </List>
    </>
  );
};

export default Home;
