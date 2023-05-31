import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

import { FaArrowLeft } from 'react-icons/fa';
import {
  GoBackLink,
  Container,
  Wrapper,
  InfoWrapper,
  AdditionalTitle,
  LinkWrapper,
  AdditionalList,
  AdditionalLink,
} from './MovieDetails.styled';
import { options, BASE_URL } from '../../services/ApiData';

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
        `${BASE_URL}/movie/${movieId}?language=en-US`,
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
      <Container>
        <LinkWrapper>
          <FaArrowLeft style={{ width: 9, marginRight: 5, marginTop: 3 }} />
          <GoBackLink to={locationRef.current}>Go back</GoBackLink>
        </LinkWrapper>
        <Wrapper>
          <img src={image} width="300" alt={title}></img>
          <InfoWrapper>
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
          </InfoWrapper>
        </Wrapper>

        <AdditionalTitle>Additional information:</AdditionalTitle>
        <AdditionalList>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </AdditionalList>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
