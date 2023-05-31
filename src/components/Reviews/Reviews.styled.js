import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 16px;

  > li:not(:last-child) {
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.03em;

    margin-bottom: 7px;
  }

  p {
    font-size: 16px;
    letter-spacing: 0.03em;
    line-height: 1.25;
    margin-bottom: 15px;
  }
`;
