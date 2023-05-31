import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5px;
  padding-bottom: 7px;
  border-bottom: 2px solid #d3d3d3;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const GoBackLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: #212121;

  &:hover {
    color: #ff4500;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  ${'' /* margin-top: 10px; */}
  margin-bottom: 20px;

  > img {
    margin-right: 40px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;

  > h1 {
    font-size: 26px;
    letter-spacing: 0.03em;

    margin-bottom: 10px;
  }

  > h2 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.03em;

    margin-bottom: 10px;
  }

  > h3 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.03em;

    margin-bottom: 10px;
  }

  > p {
    font-size: 16px;
    letter-spacing: 0.03em;
    line-height: 1.25;
    margin-bottom: 15px;
  }

  > ul {
    display: flex;
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const AdditionalTitle = styled.h4`
  margin-bottom: 20px;
`;

export const AdditionalList = styled.ul`
  border-bottom: 2px solid #d3d3d3;
  padding-bottom: 7px;
  margin-left: 16px;
  margin-bottom: 20px;

  > li:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const AdditionalLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #212121;

  &:hover {
    color: #ff4500;
  }
`;
