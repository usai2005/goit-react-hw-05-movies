import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;

  margin-bottom: 15px;

  > input {
    padding-left: 15px;
    margin-right: 10px;
    font-size: 20px;
    width: 250px;
    height: 35px;
    border-radius: 5px;
  }

  > button {
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    color: #212121;
    font-weight: 500;

    border: 2px solid #212121;
    border-radius: 5px;
  }

  > button:hover {
    background-color: #ff4500;
    border-color: #ff4500;
    color: #ffffff;
  }
`;

export const List = styled.ul`
  padding: 0 16px;

  > li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const FilmLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
`;
