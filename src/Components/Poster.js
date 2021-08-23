import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  border-radius: 3px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  transition: opacity 0.5s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  opacity: 0;
  transition: opacity 0.5s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 0.7;
    }
  }
`;

const Title = styled.span`
  width: 100%;
  display: block;
  margin-bottom: 2px;
  font-size: 12px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require('../assets/default_image.png').default
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{' '}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
