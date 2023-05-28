import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI',
  },
};

const Home = function () {
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchTrending() {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
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
      .catch(err => console.error(err))

      .finally(setIsLoading(false));
  }, []);
  return (
    <>
      {<Loader loading={isLoading} />}
      <h1>Trending today</h1>
      <ul>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
