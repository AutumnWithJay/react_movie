import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: grid;

  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 13px;
  text-align: center;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  font-size: 13px;
`;

const Poster = styled.img`
  width: 100%;
  height: 30%;
`;

const Title = styled.span`
  margin: 10px 0;
  font-weight: 700;
  text-decoration: underline;
`;

const Airdate = styled.span``;

const Count = styled.span``;

const Season = ({ info }) => {
  return (
    <Container>
      {info.map((data) => {
        return (
          <InfoContainer>
            <Poster
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : require('../assets/default_image.png').default
              }
            />
            <Title>{data.name}</Title>
            <Airdate>시작일자: {data.air_date ? data.air_date : '시작일자 정보 없음'}</Airdate>
            <Count>방영횟수: {data.episode_count ? data.episode_count : '정보 없음'}</Count>
          </InfoContainer>
        );
      })}
    </Container>
  );
};

export default Season;
