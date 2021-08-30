import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import { Helmet } from 'react-helmet';
import Message from 'Components/Message';
import imdbIcon from '../../assets/imdb.png';
import Video from 'Components/Video';
import Production from 'Components/Production';
import Season from 'Components/Season';

const Container = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  border-radius: 7px;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

const Data = styled.div`
  margin-left: 10px;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  vertical-align: middle;
`;

const Link = styled.a``;

const Divider = styled.span`
  margin: 0 5px;
`;

const Overview = styled.p`
  margin-top: 10px;
  opacity: 0.8;
  line-height: 1.5;
  font-size: 12px;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const About = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  opacity: 0.8;

  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const AboutTitle = styled.span`
  font-size: 15px;
  cursor: pointer;
`;

const AboutOverview = styled.div`
  margin-top: 20px;
  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const DetailPresenter = ({ result, error, loading, isTv }) => {
  const [current, setCurrent] = useState('video');

  const handleClick = (e) => {
    const {
      dataset: { value },
    } = e.target;

    setCurrent(value);
  };

  return loading ? (
    <>
      <Helmet>
        <title>로딩중.. | Movilix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message error={error} />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.original_name} | Movilix</title>
      </Helmet>
      <Backdrop bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImg={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/default_image.png').default
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>∙</Divider>
            <Item>{result.runtime ? result.runtime : result.episode_run_time[0]}분</Item>
            <Divider>∙</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name}/`,
                )}
            </Item>
            <Divider>∙</Divider>
            <Link href={`https://www.imdb.com/title/${result.imdb_id}`}>
              <Icon alt="imdb icon" src={imdbIcon} />
            </Link>
            <Overview>{result.overview}</Overview>
            <About>
              <AboutTitle
                data-value="video"
                onClick={(e) => handleClick(e)}
                style={
                  current === 'video'
                    ? {
                        borderBottom: '3px solid #d2082d',
                        transition: 'border-bottom 0.5s ease-in-out',
                      }
                    : { borderBottom: 'transparent', transition: 'border-bottom 0.5s ease-in-out' }
                }
              >
                관련영상
              </AboutTitle>
              <AboutTitle
                data-value="production"
                onClick={(e) => handleClick(e)}
                style={
                  current === 'production'
                    ? {
                        borderBottom: '3px solid #d2082d',
                        transition: 'border-bottom 0.5s ease-in-out',
                      }
                    : { borderBottom: 'transparent', transition: 'border-bottom 0.5s ease-in-out' }
                }
              >
                제작정보
              </AboutTitle>
              {isTv && (
                <AboutTitle
                  data-value="season"
                  onClick={(e) => handleClick(e)}
                  style={
                    current === 'season'
                      ? {
                          borderBottom: '3px solid #d2082d',
                          transition: 'border-bottom 0.5s ease-in-out',
                        }
                      : {
                          borderBottom: 'transparent',
                          transition: 'border-bottom 0.5s ease-in-out',
                        }
                  }
                >
                  시즌
                </AboutTitle>
              )}
            </About>
            <AboutOverview>
              {current === 'video' && <Video info={result} />}
              {current === 'production' && result.production_companies && (
                <Production info={result} />
              )}
              {current === 'season' && result.seasons && <Season info={result.seasons} />}
            </AboutOverview>
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
