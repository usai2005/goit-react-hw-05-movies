import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI',
  },
};

const Movies = function () {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeQuery = searchParams.get('query') ?? '';

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    setIsLoading(true);

    async function searchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      );

      const results = await response.json();
      return results;
    }

    searchMovie()
      .then(results => {
        const moviesList = results.results;

        setSearchResult(moviesList);
      })
      .catch(err => console.error(err))

      .finally(setIsLoading(false));
  }, [searchQuery]);

  const updateQueryString = e => {
    const movieName = e.target.value;

    movieName === ''
      ? setSearchParams({})
      : setSearchParams({ query: movieName });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchQuery(`query=${form.elements.searchQuery.value}`);
    form.reset();
  };

  return (
    <div>
      {<Loader loading={isLoading} />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={onChangeQuery}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResult &&
          searchResult.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title ? movie.title : movie.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
