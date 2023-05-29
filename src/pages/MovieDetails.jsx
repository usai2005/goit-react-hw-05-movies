import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGUxN2RiYWMzM2I5YjY2YTE1OGFjMWQ5ZjBiNDgzZiIsInN1YiI6IjY0NmFhMTAxMmJjZjY3MDEzODk1NWI2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDn_VnUi_rZiJUD7l1IkM4cvRuTnV717d1ByGV3DRUI',
  },
};

const MovieDetails = function () {
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const movieDetails = await response.json();
      return movieDetails;
    }
    fetchMovieDetails()
      .then(movieDetails => {
        setImage(`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`);

        setGenres(movieDetails.genres);
        setTitle(movieDetails.title);
        setScore((movieDetails.vote_average * 10).toFixed(0));
        setOverview(movieDetails.overview);
      })

      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={locationRef.current}>Go back</Link>
        <img src={image} width="300" alt={title}></img>

        <h1>{title}</h1>
        <p>User score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>

        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
