import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { options, BASE_URL } from '../../services/ApiData';
import { LoaderWrapper, Form, List, FilmLink } from './Movies.styled';

const Movies = function () {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery && onChangeQuery) {
      setSearchQuery(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchQuery === '') return;
    setIsLoading(true);

    setSearchResult(null);

    async function searchMovie() {
      const response = await fetch(
        `${BASE_URL}/search/movie?${searchQuery}&include_adult=false&language=en-US&page=1`,
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

      .finally(() => {
        setIsLoading(false);
      });
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
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={onChangeQuery}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </Form>
      {isLoading && (
        <LoaderWrapper>
          <RotatingLines
            strokeColor="#FF0000"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </LoaderWrapper>
      )}
      <List>
        {searchResult &&
          searchResult.map(movie => {
            return (
              <li key={movie.id}>
                <FilmLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title ? movie.title : movie.name}
                </FilmLink>
              </li>
            );
          })}
      </List>
    </>
  );
};

export default Movies;
