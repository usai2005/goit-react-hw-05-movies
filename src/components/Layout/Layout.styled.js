import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 999;

  width: 1140px;
  height: 60px;

  background-color: #ffffff;

  border-bottom: 3px solid #d3d3d3;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 70px;
  height: 30px;

  color: #212121;
  text-decoration: none;
  font-weight: 500;

  border: 2px solid #212121;
  border-radius: 5px;

  &.active {
    background-color: #ff4500;
    border-color: #ff4500;
    color: #ffffff;
  }
`;
