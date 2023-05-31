import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNavLink, Container, List, Header } from './Layout.styled';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <List>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="movies">Movies</StyledNavLink>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
