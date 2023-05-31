import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 16px;

  > li {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.03em;
  }

  > li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.03em;

  margin-bottom: 20px;
`;
